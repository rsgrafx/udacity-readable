import React from  'react'
import {sort} from '../actions/sorter'
import {connect} from 'react-redux'

import FlatButton from 'material-ui/FlatButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'

const HeaderActions = ({sortPosts}) => {
  return(
    <div className="row">
      <div id="sort-posts" className="col-md-9">
          <FlatButton
            onClick={() => {sortPosts("MOST_POPULAR_POSTS")}}
            label="Most Popular"
            labelPosition="after"
            primary={true}
          />
          <FlatButton
            onClick={() => {sortPosts("MOST_RECENT_POSTS")}}
            label="Most Popular"
            labelPosition="after"
            primary={true}
          />
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
      <hr />
    </div>
  )
}

const sortPosts = (data) => (dispatch) => {
  return dispatch(sort(data))
}

export default connect(null, {sortPosts})(HeaderActions);
