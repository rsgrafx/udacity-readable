import React, {Component} from 'react'
import {connect} from 'react-redux'

import store from '../store'
import { getCategories } from  '../actions'
import { getPostsByCategory } from '../actions/posts'

class Categories extends Component {
  state = {
    categories: []
  }
  componentWillMount() {
    this.props.loadCategories()
  }

  render() {
    return(
    <div id="post-categories" className="col-md-4">
      <h3>Post Categories</h3>
      <ul>
        {this.props.categories.map((cat) => (<li key={cat.name} >
          <a onClick={() => {this.props.filterByCategory(cat.name)}}>{cat.name}</a></li>))
        }
      </ul>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    filterByCategory: (data) => dispatch(getPostsByCategory(data)),
    loadCategories: (data) => dispatch(getCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);