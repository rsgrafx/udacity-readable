import React, {Component} from 'react'
import { Redirect } from 'react-router'
import {connect} from 'react-redux'
import Moment from 'react-moment'
import FlatButton from 'material-ui/FlatButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'

import Do from '../../actions/types'

import {deletePost} from '../../actions/posts'

import CommentForm from '../comments/CommentForm'
import VoteControl from '../votes/VoteControl'
import CommentList from './CommentList'

class ShowPostPartial extends Component {
  state = {redirect: false}

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

          <h2>{post.title}</h2>

          <FlatButton
            href={`/post/${post.id}/edit`}
            label="Edit Post"
            labelPosition="before"
            primary={true}
            icon={<ModeEdit />}
          />

          <FlatButton
            onClick={() => {this.removeAndRedirect(post.id)}}
            label="Remove Post"
            primary={true}
          />

          <h4>Author: {post.author}</h4>
            <Moment className="text-warning label"element="span" fromNow>{post.timestamp}</Moment>
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
    removePost: (data) => dispatch(deletePost(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowPostPartial);