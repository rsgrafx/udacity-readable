import {combineReducers} from 'redux'
import Do from '../actions/constants'

/*
  This reducer is in charge of Adding/Removing Posts 
*/

export const posts = (state = [], action) => {
  switch (action.type) {
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

     default:
       return state
   }
}

export default combineReducers({posts, post})