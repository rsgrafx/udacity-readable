import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router'
import {connect} from 'react-redux'

import store from '../../store'
import Do from '../../actions/constants'

import {
  getPost,
  deletePost
} from '../../actions/posts'

import {
  deleteComment,
  getComments,
  sortCommentbyVote,
  sortCommentsMostRecent
} from '../../actions/comments'

import Comment from '../comments/Comment'
import CommentForm from '../comments/CommentForm'
import VoteControl from '../votes/VoteControl'

class ShowPost extends Component {
  state = {comments: [], redirect: false}

  componentWillMount() {
    const {router} = this.props
    this.props.loadPost(router.match.params.id)
    this.props.loadComments(router.match.params.id)
  }

  removeAndRedirect(postId) {
    this.props.removePost(postId)
    this.setState({redirect: true})
  }

  render() {
    store.subscribe(() => {
      this.setState({comments: store.getState().comments})
    })

    const post = store.getState().post
    const { commentsByMostVotes, commentsMostRecent, removePost } = this.props
    const payload = {
      type: Do.POST_VOTE,
      postId: post.id
    }

    return(
      <div id="post-item">
        <div className="col-xs-10 col-md-11">
          <VoteControl payload={payload}/>
          <Link to={`/post/${post.id}/edit`}
            className="btn btn-warning">Edit Post
          </Link>
          <button
            onClick={() => {this.removeAndRedirect(post.id)}}
            className="btn btn-small btn-danger">Delete Post</button>
          <h2>{post.title}</h2>
          <h4>Author: {post.author} - {post.timestamp} </h4>
          <p>
            {post.body}
          </p>
          <hr />
        </div>
        {this.state.redirect && <Redirect to={'/'} />}
        <div className="col-xs-10 col-md-11">
          <h3>Leave Comment</h3>
          <CommentForm postID={post.id}/>
          <h3>Recent Comments</h3>
          <button onClick={() => {commentsMostRecent()}}>Most Recent</button>
          <button onClick={() => {commentsByMostVotes()}}>Top Voted</button>
          <hr />
          {this.state.comments.map((c) => <Comment key={c.id} comm={c} />)}
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
    removePost: (data) => dispatch(deletePost(data)),
    loadComments: (data) => dispatch(getComments(data)),
    commentsByMostVotes: () => dispatch(sortCommentbyVote()),
    commentsMostRecent: () => dispatch(sortCommentsMostRecent())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);