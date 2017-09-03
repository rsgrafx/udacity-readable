import React, {Component} from 'react'
import {fetchPosts} from '../utils/api'
import {updateFromApi} from '../actions'
import {connect} from 'react-redux'
import store from  '../store'

const PostShortItem = ({post}) => {
  return(
    <div id="post-item">
      <div className="col-xs-10 col-md-11">
        <a href="post-view.html"><h2>{post.title}</h2></a>
      <p>
        {post.body}
      </p>
      <span><a href="post-view.html" className="pull-right">Read Full Post</a></span>
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
  state = {
    posts: []
  }
  
  componentWillMount() {
    fetchPosts()
    .then( (responseData) => {
      responseData.map((post) => {
        this.props.updatePostStore(post)
      })
      const {posts} = store.getState()
      this.setState({...this.state, posts})
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
    updatePostStore: (data) => dispatch(updateFromApi(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListings);