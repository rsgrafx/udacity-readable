import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Moment from 'react-moment'

import VoteControl from './votes/VoteControl'
import Do from '../actions/types'
import {getPosts} from '../actions/posts'

const PostShortItem = ({post, commentCount}) => {
  const payload = {
    type: Do.POST_VOTE,
    postId: post.id
  }

  return(
    <div id="post-item">
      <div className="col-xs-10 col-md-11">
        <Link to={`/${post.category}/${post.id}`}><h2>{post.title}</h2></Link>
        <Moment className="text-warning label" element="span" fromNow>{post.timestamp}</Moment>
        <small>Tagged Category: {post.category}</small> •
        <small className="text-success"> {commentCount} {(commentCount > 1 || commentCount === 0) ? "comments" : "comment"}</small>
        <span className="text-warning"> • {post.voteScore} {(post.voteScore > 1 || post.voteScore === 0) ? "votes" : "vote"}</span>
      <p>
        {post.body}
      </p>
      <span>
        <Link className="btn btn-sml btn-warning" to={`/${post.category}/${post.id}`}>Read Full Post</Link>
      </span>
    </div>
    <VoteControl payload={payload} />
  </div>)
}

class PostListings extends Component {

  commentCount = (postId, comments) => {
    return comments.filter(comment => comment.parentId === postId).length
  }

  componentWillMount() {
    const {loadPosts} = this.props
    loadPosts()
  }

  render() {
      const {posts, allComments} = this.props
      return(
      <div id="post-listings" className="col-md-8">
          <h3>What's Happening Today</h3>
          {posts.map((post) => <PostShortItem
            key={post.id}
            post={post}
            commentCount={this.commentCount(post.id, allComments)}
            />)
          }
      </div>)
    }
}

const mapStateToProps = ({posts, allComments}) => {
  return {posts, allComments}
}

const loadPosts = () => (dispatch) => {
  dispatch(getPosts())
}

export default connect(mapStateToProps, {loadPosts})(PostListings);