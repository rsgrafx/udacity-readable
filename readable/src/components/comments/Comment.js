import React from 'react'
import {connect} from 'react-redux'
import Moment from 'react-moment'

import VoteControl from '../votes/VoteControl'
import {deleteComment, prepareComment} from '../../actions/comments'
import {commentVote} from '../../actions/votes'


const Comment = ({comm, removeComment, prepare}) => {

  return(
    <div className="row comment-item">
      <div className="col-md-10 col-xs-12">
        <h4>{comm.body}</h4>
        <em>by: </em>
        <span className="text-danger">{comm.author} </span>
        <br />
        <span className="text-primary">
          <em>Posted: </em>
          <Moment className="text-warning label" element="span" fromNow>{comm.timestamp}</Moment>
        </span>
        <span className="text-warning">{comm.voteScore} {(comm.voteScore > 1 || comm.voteScore === 0) ? "votes" : "vote"}</span>
        <div className="comment-control">
          <button className="label btn-success" onClick={() => {prepare(comm)} }>Edit</button>
          <button className="label btn-warning" onClick={() => {removeComment(comm.id) }}>Remove</button>
        </div>
      </div>
      <VoteControl payload={commentVote(comm.id)}/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    prepare: (data) => dispatch(prepareComment(data)),
    removeComment: (data) => dispatch(deleteComment(data)),
  }
}

export default connect(state => ({...state}), mapDispatchToProps)(Comment)