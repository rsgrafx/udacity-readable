import {combineReducers} from 'redux'

import {comments, comment} from './comments'
import {categories, category} from './categories'
import {post} from './post'
import {allPosts, posts} from  './posts'
import votes from './votes'

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