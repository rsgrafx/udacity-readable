import React, { Component } from "react";
import {Route, Switch} from "react-router-dom"
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

const NewPost = ({router, store}) => {
   return(
     <div>
      <Header />
      <PostForm router={router}/>
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

 const NoMatch = ({ location }) => (
  <div>
    <Header />
    <h3>We could not find what your looking for <code>{location.pathname}</code></h3>
  </div>
)


export default class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/newpost" render={(router) => <NewPost router={router} /> } />
          <Route exact path="/post/:id/edit" render={(router) => <EditPost router={router} /> } />
          <Route exact path="/:category"
              render={
                (router) => {
                  if (router.match.params.category === "newpost") {
                    return null
                  } else {
                    store.dispatch(getPostsByCategory(router.match.params.category))
                    return <Home router={router} />
                  }
                }
            }
          />
          <Route exact path="/:category/:id" render={(router) => <ViewPost router={router} /> } />
          <Route exact path="/" render={() => <Home router={false}/> } />
          <Route component={NoMatch} />
        </Switch>
    );
  }
}