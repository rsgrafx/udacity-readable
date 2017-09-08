import Do from '../actions/constants'

const votes = (state = {}, action) => {
  switch (action.type) {
    case Do.POST_VOTE:
      return state
    default:
      return state;
  }
}

export default votes;