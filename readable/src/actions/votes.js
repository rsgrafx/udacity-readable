import Do from './types'

export function postVote(postId) {
  return {
    type: Do.POST_VOTE,
    postId
  }
}