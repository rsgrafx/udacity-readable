import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createPost} from '../../actions/posts'
import {getCategories} from  '../../actions'

import Form from './FormPartial'

class PostForm extends Component {

  componentWillMount() {
    this.props.loadCategories()
  }
  render() {
    return(<Form
      categories={this.props.categories}
      formFunc={this.props.newPost}
      />)
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: (data) => dispatch(getCategories(data)),
    newPost: (data) => dispatch(createPost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);