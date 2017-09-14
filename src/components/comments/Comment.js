import React from 'react'
import {connect} from 'react-redux'

import Do from '../../actions/constants'
import VoteControl from '../votes/VoteControl'
import {deleteComment} from '../../actions/comments'


const Comment = (props) => {

  const {comm, removeComment} = props

  const payload = {
    type: Do.COMMENT_VOTE,
    commentId: comm.id
  }

  return(
    <div className="row comment-item">
      <div className="col-md-10 col-xs-12">
        <h4>{comm.body}</h4>
        <span className="text-primary">Posted: {comm.timestamp}.</span>
        <span className="text-warning">by {comm.author}</span>
        <div className="comment-control">
          <button>Edit</button>
          <button onClick={() => { removeComment(comm.id) }}>Remove</button>
        </div>
        <span> Current Vote Score: { comm.voteScore}</span>
      </div>
      <VoteControl payload={payload}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeComment: (data) => dispatch(deleteComment(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)