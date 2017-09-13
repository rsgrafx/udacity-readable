import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import store from '../../store'
import Do from '../../actions/constants'
import {getPost} from '../../actions/posts'
import {getComments, sortCommentbyVote, sortCommentsMostRecent} from '../../actions/comments'

import Comment from '../comments/Comment'
import CommentForm from '../comments/CommentForm'
import VoteControl from '../votes/VoteControl'

class ShowPost extends Component {

  componentWillMount() {
    const {router} = this.props
    this.props.loadPost(router.match.params.id)
    this.props.loadComments(router.match.params.id)
  }

  render() {
    const comments = store.getState().comments
    const post = store.getState().post
    const payload = {
      type: Do.POST_VOTE,
      postId: post.id
    }

    return(
      <div id="post-item">
        <div className="col-xs-10 col-md-11">
          <VoteControl payload={payload}/>
          <Link to={`/post/${post.id}/edit`}
            className="btn btn-small btn-warning">Edit Post
          </Link>
          <h2>{post.title}</h2>
          <h4>Author: {post.author} - {post.timestamp} </h4>
          <p>
            {post.body}
          </p>
        </div>

        <div className="col-xs-10 col-md-11">
          <h3>Leave Comment</h3>
          <CommentForm postID={post.id}/>

        <h3>Recent Comments</h3>
          <button onClick={() => {this.props.commentsMostRecent()}}>Most Recent</button>
          <button onClick={() => {this.props.commentsByMostVotes()}}>Top Voted</button>
        <hr />
        { comments.map( (comment) => <Comment key={comment.id} comment={comment}/> )}
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