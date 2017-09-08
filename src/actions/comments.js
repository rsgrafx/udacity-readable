import Do from './constants'
import {createCommentApi, fetchComments} from '../utils/api'

export const comments = (comments) => {
  return {
    type: Do.COMMENTS,
    comments: comments
  }
}

export const addComment = (comment) => {
  return {
    type: Do.ADD_COMMENT,
    ...comment
  }
}

export const getComments = (postId) => (dispatch) => {
  fetchComments(postId)
    .then((resp) => {
      dispatch(comments(resp))
    })
}

export const createComment = (comment) => (dispatch) => {
  createCommentApi(comment)
    .then((resp) => {
      dispatch(addComment(resp))
    })
}
