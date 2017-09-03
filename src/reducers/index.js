import {combineReducers} from 'redux'
import Do from '../actions/constants'

/*
  This reducer is in charge of Adding/Removing Posts 
*/

export const categories = (state = [], action) => {
  if (action.type == Do.CATEGORY) {
    let {name, path} = action
    let category = {name, path}
    return [...state,category]
  } else {
    return state
  }
  
}

export const posts = (state = [], action) => {
  switch (action.type) {
    case Do.UPDATE_POST_FROM_API: 
      return [...state, post({}, action)]

    case Do.CREATE_POST:
      return [...state, post({}, action)]

    case Do.REMOVE_POST:
      // remove Add Id to deleted_posts list.
      return state.filter(post => (post.id === action.postId))

    default:
      return state;
  }
}

export const post = (state = {}, action) => {
   switch (action.type) {
     case Do.CREATE_POST:
      let {
        id,
        timestamp,
        title,
        author,
        body,
        category
      } = action
      return {...state,
        id,
        timestamp,
        title,
        author,
        body,
        category
      }
    case Do.UPDATE_POST_FROM_API:
      return {...state,
        id: action.id,
        timestamp: action.timestamp,
        title: action.title,
        author: action.author,
        body: action.body,
        category: action.category
      }

     default:
       return state
   }
}

export const sort = (state, action) => {
  switch (action.type) {
    case Do.MOST_RECENT_POSTS:
    case Do.MOST_POPULAR_POSTS:
    case Do.MOST_RECENT_COMMENTS:
    case Do.MOST_POPULAR_COMMENTS:
    default:
      return state;
  }
}

export default combineReducers({posts, post, categories})