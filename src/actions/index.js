import Do from './constants'
import {fetchCategories} from '../utils/api'
import {voteOnComment, voteOnPost} from '../utils/api'
/*
  createNewPost({})
  returns action
*/
export const categories = (categories) => {
  return {
    categories,
    type: Do.CATEGORIES
  }
}

export const getCategories = () => (dispatch) => {
  fetchCategories()
    .then((resp) => {
      dispatch(categories(resp.categories))
  })
}

export function newComment({id, timestamp, body, parentId, author}) {
  return {
    type: Do.CREATE_COMMENT,
    id,
    timestamp,
    author,
    body,
    parentId
  }
}

export function vote(payload) {

  switch (payload.type) {
    case Do.POST_VOTE:
      let {option, postId} = payload
      voteOnPost(option, postId)
      return payload

    case Do.COMMENT_VOTE:
      let {option, commentId} = payload
      voteOnComment(option, commentId)
      return payload

    default:
      return payload
  }
}
