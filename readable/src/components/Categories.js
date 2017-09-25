import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { getCategories } from  '../actions'
import store from '../store'

class Categories extends Component {

  componentWillMount() {
    this.props.loadCategories()
  }

  render() {
    const categories = store.getState().categories
    return(
    <div id="post-categories" className="col-md-4">
      <h3>Post Categories</h3>
      <ul className="list-group">
        {categories.map((cat) => (
          <li key={cat.name} className="list-group-item bg-default">
            <Link to={cat.name}
              className="btn btn-sml btn-fill"><b>{cat.name}</b></Link>
          </li>)
        )}
      </ul>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return state
}
const loadCategories = (data) => (dispatch) => {
  dispatch(getCategories(data))
}

export default connect(mapStateToProps, {loadCategories})(Categories);