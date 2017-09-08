import {combineReducers} from 'redux'

import Do from '../actions/constants'

import {comments, comment} from './comments'
import {categories, category} from './categories'
import {posts, post} from  './posts'
import votes from './votes'
/*
  This reducer is in charge of Adding/Removing Posts
*/

export default combineReducers({
  votes,
  posts,
  post,
  categories,
  category,
  comments,
  comment
})