import Do from './constants'
import {removeCommentApi, createCommentApi, fetchComments} from '../utils/api'

export const comments = (comments, postId) => {
  return {
    type: Do.COMMENTS,
    comments: comments,
    postId
  }
}

export const addComment = (comment) => {
  return {
    type: Do.ADD_COMMENT,
    ...comment
  }
}

export const removeComment = (commentId) => {
  return {
    type: Do.REMOVE_COMMENT,
    commentId
  }
}

export const getComments = (postId) => (dispatch) => {
  fetchComments(postId)
    .then((resp) => {
      dispatch(comments(resp, postId))
    })
}

export const deleteComment = (commentId) => (dispatch) => {
  removeCommentApi(commentId)
    .then((resp) => {
      dispatch(removeComment(commentId))
    })
}

export const createComment = (comment) => (dispatch) => {
  createCommentApi(comment)
    .then((resp) => {
      dispatch(addComment(resp))
    })
}

export const sortCommentbyVote = () => (dispatch) => {
  dispatch({type: Do.MOST_POPULAR_COMMENTS})
}

export const sortCommentsMostRecent = () => (dispatch) => {
  dispatch({type: Do.MOST_RECENT_COMMENTS})
}
