import React, { Component } from 'react';
import {Route} from 'react-router-dom'

import Header from "./components/Header"
import PostListings from "./components/PostListings"
import Categories from "./components/Categories"
import PostForm from "./components/posts/PostForm"

const Home = (props) => {
  return(<div>
    <Header />
    <PostListings />
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

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/newpost" render={() => <Post /> } />
        <Route exact path="/" render={() => <Home /> } />
      </div>
    );
  }
}

export default App;
