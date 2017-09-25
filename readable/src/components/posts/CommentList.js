import React, {Component} from 'react'
import {connect} from 'react-redux'
import Comment from '../comments/Comment'

import {
  sortCommentbyVote,
  sortCommentsMostRecent
} from '../../actions/comments'

class CommentList extends Component {
  render() {
    const {commentsMostRecent, commentsByMostVotes, comments} = this.props
    return(
      <div>
        <h3>Really Recent Comments</h3>
        <button onClick={() => {commentsMostRecent()}}>Most Recent</button>
        <button onClick={() => {commentsByMostVotes()}}>Top Voted</button>
        <hr />
        {comments.map((c) => <Comment key={c.id} comm={c} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    commentsByMostVotes: () => dispatch(sortCommentbyVote()),
    commentsMostRecent: () => dispatch(sortCommentsMostRecent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);