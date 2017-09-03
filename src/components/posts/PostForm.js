import React, {Component} from 'react'

import {createNewPost} from '../../actions'

export default class PostForm extends Component {
  state = {
    title: null,
    author: null,
    body: null,
    category: null
  }

  render () {
    return(
    <div id="create-post-form" className="col-md-8">
      <h3>New Post From React</h3>
      <form action="">
        <label >Title</label>
        <input type="text" name="title" id="" className="form-control" />
        <label >Authors Name</label>
        <input type="text" name="author" id="" className="form-control" />
        <label >Post Body</label>
        <textarea name="body" id="" cols="30" rows="10" className="form-control"></textarea>  
        <input type="submit" className="btn btn-success btn-large btn-rounded" value="Save" />
        <a className="btn btn-warning btn-large btn-rounded" href="/">Cancel</a>
      </form>
    </div>)
  }
}
