import React from 'react'
import {connect} from 'react-redux'

import Do from '../../actions/types'
import {
  createComment,
  editComment,
  clearComment
} from '../../actions/comments'

import store from '../../store'

const CommentForm = ({postID, editComment, newComment, clearCommentForm, comment}) => {
  let body, author

  const submitComment = (event) => {
    event.preventDefault()

      if (!!(comment.id)) {
        editComment(store.getState().comment)
      } else {
        let change = {
          id: Math.random().toString(36).substr(-10),
          timestamp: Date.now(),
          body: body.value,
          author: author.value,
          parentId: postID,
          voteScore: 0
        }
        newComment(change)
      }
    body.value = ''
    author.value = ''
  }

  const handleBodyChange = (event) => {
    store.dispatch({
      type: Do.CHANGE_COMMENT,
      body: event.target.value
    })
  }

  const handleAuthorChange = (event) => {
    store.dispatch({
      type: Do.CHANGE_COMMENT,
      author: event.target.value
    })
  }

  const clear = () => {
    body.value = ''
    author.value = ''
    clearCommentForm()
  }

  return(
    <div className="row comment-form">
      <form onSubmit={submitComment} >
        <div className="form-group">
          <label>Share your viewpoint:</label><br />
          <div className="form-group">
            <label>Your Name: </label>
            <input
            ref={input => {author = input}}
              value={comment.author}
              onChange={handleAuthorChange}
              name="post_comment_author" />
          </div>
          <textarea
            ref={input => {body = input}}
            value={comment.body}
            onChange={handleBodyChange}
            name="details"
            cols="80"
            rows="3"></textarea>
        </div>
        <div className="col-md-4">
          <button onClick={clear} className="btn btn-warning btn-large ">Cancel</button>
          <input type="submit" className="pull-right btn btn-success" value="Save" />
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {comment: state.comment}
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCommentForm: () => dispatch(clearComment()),
    editComment: (data) => dispatch(editComment(data)),
    newComment: (data) => dispatch(createComment(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);