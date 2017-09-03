import Do from './constants'
/*
  createNewPost({})
  returns action
*/
export function updateFromApi(post) {
  return {...post, type: Do.UPDATE_POST_FROM_API }
}

export function loadCategoryFromApi(category) {
  return {...category, type: Do.CATEGORY}
}

export function createNewPost({id, timestamp, title, author, body, category}) {
  return {
    type: Do.CREATE_POST,
    id,
    timestamp,
    title,
    author,
    body,
    category
  }
}

export function removePost(postId) {
  return {
    type: Do.REMOVE_POST,
    postId: postId
  }
}