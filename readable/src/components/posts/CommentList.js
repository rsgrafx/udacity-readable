import React, {Component} from 'react'
import {connect} from 'react-redux'
import Comment from '../comments/Comment'
import store from '../../store'

import {
  sortCommentbyVote,
  sortCommentsMostRecent
} from '../../actions/comments'

class CommentList extends Component {
  state = {
    comments: []
  }
  commentFilter(func) {
    func()
    this.setState({comments: store.getState().comments})
  }
  componentWillMount() {
    this.setState({comments: this.props.comments})
  }
  render() {

    const {commentsMostRecent, commentsByMostVotes, comments} = this.props
    return(
      <div>
        <h3>Really Recent Comments</h3>
        <button onClick={() => {this.commentFilter(commentsMostRecent)}}>Most Recent</button>
        <button onClick={() => {this.commentFilter(commentsByMostVotes)}}>Top Voted</button>
        <hr />
        {comments.map((c) => <Comment key={c.id} comm={c} />)}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    commentsByMostVotes: () => dispatch(sortCommentbyVote()),
    commentsMostRecent: () => dispatch(sortCommentsMostRecent())
  }
}

export default connect(null, mapDispatchToProps)(CommentList);