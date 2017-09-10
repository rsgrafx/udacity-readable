import React, {Component} from 'react'
import {connect} from 'react-redux'

import store from '../../store'
import Do from '../../actions/constants'
import {getPost} from '../../actions/posts'
import {getComments, sortCommentbyVote, sortCommentsMostRecent} from '../../actions/comments'

import Comment from '../comments/Comment'
import CommentForm from '../comments/CommentForm'
import VoteControl from '../votes/VoteControl'

class ShowPost extends Component {

  state = {
    post: {},
    comments: []
  }

  componentWillMount() {
    const {router} = this.props

    this.props.loadPost(router.match.params.id)
    this.props.loadComments(router.match.params.id)

    store.subscribe(() => {
      this.setState({
        post: store.getState().post,
        comments: store.getState().comments
      })
    })
  }

  render() {

    const payload = {
      type: Do.POST_VOTE,
      postId: this.state.post.id
    }

    return(
      <div id="post-item">
        <VoteControl payload={payload}/>

        <div className="col-xs-10 col-md-11">
          <h2>{this.state.post.title}</h2>
          <h4>Author: {this.state.post.author} - {this.state.post.timestamp} </h4>
          <p>
            {this.state.post.body}
          </p>
        </div>

        <div className="col-xs-10 col-md-11">
          <h3>Leave Comment</h3>
          <CommentForm postID={this.state.post.id}/>

        <h3>Recent Comments</h3>
          <button onClick={() => {this.props.commentsMostRecent()}}>Most Recent</button>
          <button onClick={() => {this.props.commentsByMostVotes()}}>Top Voted</button>
        <hr />
        { this.state.comments.map( (comment) => <Comment key={comment.id} comment={comment}/> )}
      </div>
    </div>)
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPost: (data) => dispatch(getPost(data)),
    loadComments: (data) => dispatch(getComments(data)),
    commentsByMostVotes: () => dispatch(sortCommentbyVote()),
    commentsMostRecent: () => dispatch(sortCommentsMostRecent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);