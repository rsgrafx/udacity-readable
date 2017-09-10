import {combineReducers} from 'redux'

import {comments, comment} from './comments'
import {categories, category} from './categories'
import {allPosts, posts, post} from  './posts'
import votes from './votes'
/*
  This reducer is in charge of Adding/Removing Posts
*/

export default combineReducers({
  votes,
  posts,
  post,
  allPosts,
  categories,
  category,
  comments,
  comment
})