import Do from '../actions/constants'
import {mostRecent, mostPopular}  from  '../actions/sorter'

export const comments = (state = [], action) => {
  switch (action.type) {

    case Do.COMMENTS:
      return [...state, ...action.comments].sort(mostPopular)

    case Do.ADD_COMMENT:
      return [...state, comment({}, {...action, type: Do.COMMENT})]

    case Do.MOST_POPULAR_COMMENTS:
      return state.sort(mostPopular)

    case Do.MOST_RECENT_COMMENTS:
      return state.sort(mostRecent)

    case Do.REMOVE_POST:
      return state.map((comment) => {
        if (comment.parentId === action.postId) {
          Object.assign(comment, {parentId: null})
        }
      })

    case Do.COMMENT_VOTE:
      return state.map((comment) => {
        if (action.payload.commentId === comment.id) {
          return commentVote(comment, action.payload.option)
        } else {
          return comment
        }
      })
    default:
      return state
  }
}

const commentVote = (post, option) => {
  if (option === "upVote") {
    return Object.assign(post,
    {voteScore: post.voteScore + 1 })
  } else if (option === "downVote") {
    return Object.assign(post,
      {voteScore: post.voteScore - 1 })
  }
}

export const comment = (state = {}, action) => {
  switch (action.type) {
    case Do.COMMENT:
      let {
        id,
        timestamp,
        parentId,
        author,
        body
      } = action
      return {...state, id, timestamp, author, body, parentId}
    default:
      return state
  }
}
