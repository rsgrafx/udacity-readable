import Do from './constants'
import store from '../store'

import {
  fetchPosts,
  fetchPostsByCategory,
  fetchPost,
  createPostApi,
  removePostApi
} from '../utils/api'

export const posts = (posts) => ({
  type: Do.POSTS,
  posts
})

export const filterPosts = (category, posts) => ({
  type: Do.FILTER_POSTS,
  category: category,
  posts: posts
})

export const postsVoteDesc = (posts) => ({
  type: Do.MOST_RECENT_POSTS,
  posts: posts
})

export const addPost = (post) => {
  return {
    type: Do.ADD_POST,
    ...post
  }
}

export const post = (post) => {
  return {
    ...post,
    type: Do.POST
  }
}

export const remove_post = (postId) => {
  return {
    type: Do.REMOVE_POST,
    postId: postId
  }
}

export const createPost = (post) => dispatch => {
  createPostApi(post)
  .then((resp) => {
    dispatch(addPost(resp))
  })
  .catch(err => console.error(err))
}

export const removePost = (postId) => dispatch => {
  removePostApi(postId)
  .then((resp) => {
    dispatch(remove_post(resp))
  })
  .catch(err => console.error(err))
}

export const getPosts = () => (dispatch) => {
  fetchPosts()
    .then(data => {
      dispatch(posts(data))
    })
  .catch(err => console.error(err))
}

export const getPost = (postId) => (dispatch) => {
  fetchPost(postId)
    .then((data) => {
      dispatch(post(data))
    })
  .catch(err => console.error(err))
}

export const getPostsByCategory = (category) => (dispatch) => {
  dispatch(filterPosts(category, store.getState().allPosts))
}

export const filterByVoteDesc = () => (dispatch) => {
  dispatch(postsVoteDesc(store.getState().allPosts))
}
