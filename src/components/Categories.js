import React, {Component} from 'react'
import {connect} from 'react-redux'

import store from '../store'
import { loadCategoryFromApi } from  '../actions'
import { fetchCategories } from '../utils/api'

class Categories extends Component {
  state = {
    categories: []
  }
  componentWillMount() {
    fetchCategories()
    .then((resp) => {
      resp.categories.map((cat) => {
        this.props.updateStoreWithCategory(cat)
      })
      let {categories} = store.getState()
      this.setState({categories: categories})
    })
  }

  render() {
    return(
    <div id="post-categories" className="col-md-4">
      <h3>Post Categories</h3>
      <ul> 
        {this.state.categories.map((cat) => (<li key={cat.name} > <a href={cat.path}>{cat.name}</a></li>))}
      </ul>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateStoreWithCategory: (data) => dispatch(loadCategoryFromApi(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);