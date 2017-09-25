import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router'
import {connect} from 'react-redux'
import Moment from 'react-moment'

import Do from '../../actions/types'

import {
  getPost,
  deletePost
} from '../../actions/posts'

import {
  getComments,
} from '../../actions/comments'

import CommentForm from '../comments/CommentForm'
import VoteControl from '../votes/VoteControl'
import CommentList from './CommentList'

class ShowPost extends Component {
  state = {redirect: false}

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
    const {post, comments} = this.props
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
          <h4>Author: {post.author}</h4>
          <Moment className="text-warning label" element="span" fromNow>{post.timestamp}</Moment>
          <p>
            {post.body}
          </p>
          <hr />
        </div>
        {this.state.redirect && <Redirect to={'/'} />}
        <div className="col-xs-10 col-md-11">
          <h3>Leave Comment</h3>
          <CommentForm postID={post.id} />
          <CommentList postId={post.id} comments={comments} />
        </div>
      </div>)
  }
}

const mapStateToProps = ({comments, post}) => {
  return {
    comments,
    post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadComments: (data) => dispatch(getComments(data)),
    loadPost: (data) => dispatch(getPost(data)),
    removePost: (data) => dispatch(deletePost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPost);