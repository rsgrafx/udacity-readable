import Do from '../actions/constants'

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