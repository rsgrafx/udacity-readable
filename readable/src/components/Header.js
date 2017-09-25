import React from 'react'
import {sort} from '../actions/sorter'
import {connect} from 'react-redux'

import FlatButton from 'material-ui/FlatButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'


const Header = (props) => {
  return(
    <section id="main-tab-header">
      <div className="row">
        <h1> <a href="/">Readable</a></h1>
      </div>
      <div className="row">
        <div id="sort-posts" className="col-md-9">
          <ul>
            <li><a id="most-popular" onClick={() => {
              props.sortPosts("MOST_POPULAR_POSTS")}}>Most Popular</a>
            </li>
            <li><a id="most-popular" onClick={() => {
              props.sortPosts("MOST_RECENT_POSTS")}}>Most Recent</a>
            </li>
          </ul>
        </div>
        <div id="sort-posts" className="col-md-3">
        <FlatButton
              href="/newpost"
              label="Share Your Thoughts"
              labelPosition="after"
              primary={true}
              icon={<ModeEdit />}
          />
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
