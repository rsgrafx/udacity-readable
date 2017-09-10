import React from 'react'
import {connect} from 'react-redux'
import {createComment} from '../../actions/comments'

const CommentForm = (props) => {
  let body, author

  const submitComment = (event) => {
    let comment = {
      id: Math.random().toString(36).substr(-10),
      timestamp: Date.now(),
      body: body.value,
      author: author.value,
      parentId: props.postID
    }
    event.preventDefault()

    props.newComment(comment)

    body.value = ''
    author.value = ''
  }

  return(
    <div className="row comment-form">
      <form onSubmit={submitComment} >
        <div className="form-group">
          <label>Share your viewpoint: {props.postID} </label><br />
          <textarea
            ref={input => {body = input}}
            name="details"
            cols="80"
            rows="3"></textarea>
        </div>
        <div className="form-group">
          <label>Your Name: </label>
          <input
            ref={input => {author = input}}
            type="text"
            name="post_comment_author" />
        </div>
        <input type="submit" className="btn btn-success btn-large btn-rounded" value="Save" />
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    newComment: (data) => dispatch(createComment(data))
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);