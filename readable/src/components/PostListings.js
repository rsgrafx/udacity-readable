import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import VoteControl from './votes/VoteControl'
import Do from '../actions/constants'

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
      <p>
        {post.body}
      </p>
      <span>
        <Link className="btn btn-sml btn-warning" to={`/${post.category}/${post.id}`}>Read Full Post</Link>
        </span>
      <div id="post-meta-data">
          <span className="row">
            <span className="text-primary">{post.timestamp}</span><br />
            <span className="text-warning">Current Score: {post.voteScore}</span>
          </span>
      </div>
      <small>Category: {post.category}</small> <br/>
      <small>CommentCount: {commentCount}</small>
    </div>
    <VoteControl payload={payload} />
  </div>)
}

class PostListings extends Component {

  // loadCategoryPosts = (category) => store.dispatch(getPostsByCategory(category))

  commentCount = (postId, comments) => {
    return comments.filter(comment => comment.parentId === postId).length
  }

  componentWillMount() {
    const {loadPosts} = this.props
    loadPosts()
  }

  render() {
      const {posts, comments} = this.props
      return(
      <div id="post-listings" className="col-md-8">
          <h3>What's Happening Today</h3>
          {posts.map((post) => <PostShortItem key={post.id} post={post} commentCount={this.commentCount(post.id, comments)}/>)}
      </div>)
    }
}

const mapStateToProps = (state) => {
  return {posts: state.posts, comments: state.allComments}
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListings);