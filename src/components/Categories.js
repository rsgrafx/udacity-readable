import React from 'react'

const Categories = (props) => {
  return(
    <div id="post-categories" className="col-md-4">
      <h3>Post Categories</h3>
        <ul>
        <li> <a href="#react">React</a></li>
        <li><a href="#udacity">Udacity</a></li>
        <li><a href="#redux">Redux</a></li>
      </ul>
    </div>)
}
export default Categories