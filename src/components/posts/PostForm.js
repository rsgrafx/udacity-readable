import React, {Component} from 'react'

import {createNewPost} from '../../actions'
import {createPostApi} from '../../utils/api'
import store from '../../store'

const PostForm = () => {
  let title, author, body, category
  
  const onSubmitForm = (event) => {
    let post = {
      id: Math.random().toString(36).substr(-10),
      timestamp: Date.now(),
      title: title.value,
      author: author.value,
      body: body.value
    }
    event.preventDefault()
    createPostApi(post)
      .then((resp) => {
        console.log("successful", post)
        store.dispatch(createNewPost(post))
      })
    
    title.value = ''
    author.value = ''
    body.value = ''
    title.focus()
  }

  return(
    <div id="create-post-form" className="col-md-8">
      <h3>New Post From React</h3>
      <form onSubmit={onSubmitForm}>
        <label >Title</label>
        <input
          ref={input => title = input}
          type="text" 
          name="title" 
          placeholder="Enter Title.."
          className="form-control"
          />
        <label >Authors Name</label>
        <input
          ref={input => author = input}
          type="text" 
          name="author" 
          placeholder="Enter Authors name..."
          className="form-control" />
        <label >Post Body</label>
        <textarea 
          ref={input => body = input}
          name="body"
          cols="30" 
          rows="10"
          placeholder="details..."
          className="form-control">
        </textarea>  
        <input type="submit" className="btn btn-success btn-large btn-rounded" value="Save" />
        <a className="btn btn-warning btn-large btn-rounded" href="/">Cancel</a>
      </form>
    </div>)
}

export default PostForm