import Do from './constants'
/*
  createNewPost({})
  returns action
*/
export function createNewPost({title, author, body, category}) {
  return {
    type: Do.CREATE_POST,
    id: Math.random().toString(36).substr(-10),
    timestamp: Date.now(),
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