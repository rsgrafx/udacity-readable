import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getPosts, getPostsByCategory} from '../actions/posts'

import store from  '../store'

const PostShortItem = ({post}) => {
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
    <div className="col-xs-2 col-md-1">
      <span>
        <h4>10</h4>
        <button>+</button>
        <button>-</button>
      </span>
    </div>
  </div>)
}

class PostListings extends Component {

  loadCategoryPosts = (category) => store.dispatch(getPostsByCategory(category))

  componentWillMount() {
    // const boundAddTodo = text => dispatch(addTodo(text))
    let {router, loadPosts, loadCategoryPosts} = this.props

    if (router === false) {
      loadPosts()
    } else {
      this.loadCategoryPosts(router.match.params.category)
    }
  }

  render() {
      return(
      <div id="post-listings" className="col-md-8">
          <h3>What's Happening Today</h3>
          {this.props.posts.map((post) => <PostShortItem key={post.id} post={post} />)}
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