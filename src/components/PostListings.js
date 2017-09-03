import React from 'react'

const PostListings = (props) => {
    return(
    <div id="post-listings" className="col-md-8">
        <h3>What's Happening Today</h3>
        <div id="post-item">
          <div className="col-xs-10 col-md-11">
              <a href="post-view.html"><h2>Post Title</h2></a>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <span><a href="post-view.html" className="pull-right">Read Full Post</a></span>
            <div id="post-meta-data">
                <span className="row">
                  <span className="text-primary">Posted: 3 Days Ago.</span><br />
                  <span className="text-warning">3 Comments</span>  
                </span>
            </div>
            
          </div>
          <div className="col-xs-2 col-md-1">
            <span>
              <h4>10</h4>
              <button>+</button>
              <button>-</button>
            </span>
          </div>
        </div>
        <div id="post-item">
            <div className="col-xs-10 col-md-11">
              <h2>Post Title</h2>
              <p>
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <span><a href="#" className="pull-right">Read Full Post</a></span>
              <div id="post-meta-data">
                  <span className="row">
                    <span className="text-primary">Posted: 3 Days Ago.</span><br />
                    <span className="text-warning">3 Comments</span>  
                  </span>
              </div>
            </div>
            <div className="col-xs-2 col-md-1">
              <span>
                <h4>10</h4>
                <button>+</button>
                <button>-</button>
              </span>
            </div>
          </div>
      </div>)
}

export default PostListings