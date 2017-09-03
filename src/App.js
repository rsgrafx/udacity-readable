import React, { Component } from 'react';

import Header from "./components/Header"
import PostListings from "./components/PostListings"
import Categories from "./components/Categories"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PostListings />
        <Categories />
      </div>
    );
  }
}

export default App;
