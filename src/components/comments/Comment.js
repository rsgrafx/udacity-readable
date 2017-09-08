import React from 'react'
import VoteControl from '../votes/VoteControl'

const Comment = ({comment}) => {
  console.log(comment)
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
      </div>
      <VoteControl />
    </div>
  )
}

export default Comment