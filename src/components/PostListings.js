import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import VoteControl from './votes/VoteControl'
import Do from '../actions/constants'

import {getPosts, getPostsByCategory} from '../actions/posts'

import store from  '../store'

const PostShortItem = ({post}) => {
  const payload = {
    type: Do.POST_VOTE,
    postId: post.id
  }

  return(
    <div id="post-item">
      <div className="col-xs-10 col-md-11">
        <Link to={`/post/${post.id}`}><h2>{post.title}</h2></Link>
      <p>
        {post.body}
      </p>
      <span>
        <Link to={`/post/${post.id}`}>Read Full Post</Link>
        </span>
      <div id="post-meta-data">
          <span className="row">
            <span className="text-primary">{post.timestamp}</span><br />
            <span className="text-warning">3 Comments</span>
          </span>
      </div>

    </div>
    <VoteControl payload={payload} />
  </div>)
}

class PostListings extends Component {

  state = {
    posts: []
  }

  loadCategoryPosts = (category) => store.dispatch(getPostsByCategory(category))

  componentWillMount() {
    let {router, loadPosts, loadCategoryPosts} = this.props
    loadPosts()
    store.subscribe(() => {
      this.setState({posts: store.getState().posts})
    })
  }

  render() {
      return(
      <div id="post-listings" className="col-md-8">
          <h3>What's Happening Today</h3>
          {this.state.posts.map((post) => <PostShortItem key={post.id} post={post} />)}
      </div>)
    }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListings);