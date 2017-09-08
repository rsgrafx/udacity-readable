import Do from '../actions/constants'
/*
  * When you create a post What are some of the things that need to happen.
*/
export const posts = (state = [], action) => {
  switch (action.type) {

    case Do.POST:
      return state.filter((post) => (post.id === action.postID))

    case Do.POSTS:
      return [...state, ...action.posts]

    case Do.ADD_POST:
      return [...state, post({}, {...action, type: Do.POST})]

    case Do.REMOVE_POST:
      // remove Add Id to deleted_posts list.
      return state.filter(post => (post.id !== action.postId))

    default:
      return state;
  }
}

export const post = (state = {}, action) => {
   switch (action.type) {
     case Do.POST:
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

      case Do.UPDATE_POST:
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