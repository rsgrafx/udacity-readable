import React from 'react'
import {connect} from 'react-redux'
import Moment from 'react-moment'

import Do from '../../actions/types'
import VoteControl from '../votes/VoteControl'
import {deleteComment} from '../../actions/comments'


const Comment = (props) => {

  const {comm, removeComment, prepare} = props

  const payload = {
    type: Do.COMMENT_VOTE,
    commentId: comm.id
  }

  const prepareComment = (comment) => {
    prepare(comment)
  }

  return(
    <div className="row comment-item">
      <div className="col-md-10 col-xs-12">
        <h4>{comm.body}</h4>
        <span className="text-primary">by {comm.author}</span>
        <span className="text-primary">
          Posted:
          <Moment className="text-warning label" element="span" fromNow>{comm.timestamp}</Moment>
        </span>
        <span className="text-warning">{comm.voteScore} {(comm.voteScore > 1 || comm.voteScore === 0) ? "votes" : "vote"}</span>
        <div className="comment-control">
          <button onClick={() => {prepareComment(comm)} }>Edit</button>
          <button onClick={() => {removeComment(comm.id) }}>Remove</button>
        </div>
      </div>
      <VoteControl payload={payload}/>
    </div>
  )
}

const mapStateToProps = (state) => { return state }

const mapDispatchToProps = (dispatch) => {
  return {
    prepare: (data) => dispatch({type: "PREPARE_COMMENT", comment: data}),
    removeComment: (data) => dispatch(deleteComment(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)