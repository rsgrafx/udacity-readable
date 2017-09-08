import Do from '../actions/constants'

export const comments = (state = [], action) => {
  switch (action.type) {

    case Do.COMMENTS:
      return [...state, ...action.comments]

    case Do.ADD_COMMENT:
      return [...state, comment({}, {...action, type: Do.COMMENT})]

    default:
      return state
  }
}

export const comment = (state = {}, action) => {
  switch (action.type) {
    case Do.COMMENT:
      let {
        id,
        timestamp,
        parentId,
        author,
        body
      } = action
      return {...state, id, timestamp, author, body, parentId}
    default:
      return state
  }
}
