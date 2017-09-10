import React from 'react'
import Do from '../../actions/constants'
import VoteControl from '../votes/VoteControl'

const Comment = ({comment}) => {
  const payload = {
    type: Do.COMMENT_VOTE,
    commentId: comment.id
  }

  return(
    <div className="row comment-item">
      <div className="col-md-10 col-xs-12">
        <p>{comment.body}</p>
        <span className="text-primary">Posted: {comment.timestamp}.</span>
        <span className="text-warning">by {comment.author}</span>
        <div className="comment-control">
          <button>Edit</button>
          <button>Remove</button>
        </div>
        <span> Current Vote Score: { comment.voteScore}</span>
      </div>
      <VoteControl payload={payload}/>
    </div>
  )
}

export default Comment