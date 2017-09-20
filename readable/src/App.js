import React, { Component } from "react";
import {Route} from "react-router-dom"
import store from "./store"
import Header from "./components/Header"
import PostListings from "./components/PostListings"
import Categories from "./components/Categories"
import PostForm from "./components/posts/PostForm"
import ShowPost from "./components/posts/ShowPost"
import EditPostForm from "./components/posts/EditPost"
import { getPostsByCategory } from "./actions/posts"

const Home = ({router, store}) => {
  return(
  <div>
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

 const EditPost = ({router, store}) => {
  return(
    <div>
     <Header />
     <EditPostForm router={router} />
    </div>
  )
 }

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/newpost" render={(router) => <Post router={router} /> } />
        <Route exact path="/post/:id/edit" render={(router) => <EditPost router={router} /> } />
        <Route exact path="/:category"
            render={
              (router) => {
                store.dispatch(getPostsByCategory(router.match.params.category))
                return <Home router={router} />
              }
          }
        />
        <Route exact path="/:category/:id" render={(router) => <ViewPost router={router} /> } />
        <Route exact path="/" render={() => <Home router={false}/> } />
      </div>
    );
  }
}