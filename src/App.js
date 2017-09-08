import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from "./components/Header"
import PostListings from "./components/PostListings"
import Categories from "./components/Categories"
import PostForm from "./components/posts/PostForm"
import ShowPost from "./components/posts/ShowPost"

const Home = ({router, store}) => {
  return(<div>
    <Header />
    <PostListings router={router}/>
    <Categories />
  </div>)
}

 const Post = (props) => {
   return(
     <div>
      <Header />
      <PostForm />
      <Categories />
     </div>
   )
 }

 const ViewPost = ({router, store}) => {
  return(
    <div>
     <Header />
     <ShowPost router={router} />
    </div>
  )
 }

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/post/:id" render={(router) => <ViewPost router={router} /> } />
        <Route exact path="/newpost" render={() => <Post /> } />
        <Route exact path="/:category" render={(router) => <Home router={router}/> } />
        <Route exact path="/" render={() => <Home router={false}/> } />
      </div>
    );
  }
}