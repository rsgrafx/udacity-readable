import React, {Component} from 'react'
import {connect} from 'react-redux'

import store from '../store'
import { getCategories } from  '../actions'

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
        {this.props.categories.map((cat) => (<li key={cat.name} > <a href={cat.path}>{cat.name}</a></li>))}
      </ul>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (data) => dispatch(getCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);