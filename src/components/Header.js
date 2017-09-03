import React, {Component} from 'react'

const Header = (props) => {
  return(
    <section id="main-tab-header">
      <div className="row">
        <h1> <a href="/">Readable</a></h1>
      </div>
      <div className="row">
        <div id="sort-posts" className="col-md-10">
          <ul>
            <li><a id="most-popular" href="#">Most Popular</a></li>
            <li><a id="most-recent" href="#">Most Recent</a></li>
            <li><a id="most-comments" href="#">Most Interactions</a></li>
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
export default Header;