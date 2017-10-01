import React from  'react'
import ShowPostPartial from "./posts/ShowPost"
import Header from "./Header"
import {connect} from 'react-redux'

import {
  getPost
} from '../actions/posts'

import {
  getComments,
} from '../actions/comments'

const ViewPost = ({router, store, fetchPost, loadComments}) => {
  fetchPost(router.match.params.id)
  loadComments(router.match.params.id)
  return(
    <div>
     <Header />
     <ShowPostPartial router={router} />
    </div>
  )
 }

 const mapDispatchToProps = dispatch => (
   {
     fetchPost(postId) {
       dispatch(getPost(postId))
     },
     loadComments(postId) {
       dispatch(getComments(postId))
     }
   }
 )

export default connect(null, mapDispatchToProps)(ViewPost)