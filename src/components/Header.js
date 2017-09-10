import React from 'react'
import {sort} from '../actions/sorter'
import {connect} from 'react-redux'

const Header = (props) => {
  return(
    <section id="main-tab-header">
      <div className="row">
        <h1> <a href="/">Readable</a></h1>
      </div>
      <div className="row">
        <div id="sort-posts" className="col-md-10">
          <ul>
            <li><a id="most-popular" onClick={() => {
              props.sortPosts("MOST_POPULAR_POSTS")}}>Most Popular</a>
            </li>
            <li><a id="most-popular" onClick={() => {
              props.sortPosts("MOST_RECENT_POSTS")}}>Most Recent</a>
            </li>
          </ul>
        </div>
        <div id="sort-posts" className="col-md-2">
          <a className="btn btn-primary btn-large btn-rounded" href="/newpost">Start Writing</a>
        </div>
      </div>
      <hr />
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortPosts: (data) => dispatch(sort(data)),
  }
}

export default connect(null, mapDispatchToProps)(Header);
