import React from 'react'
import {connect} from 'react-redux'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';

import {vote} from '../../actions'
const IconStyle = {marginRight: 10, color: '#4DD0E1'}
const VoteControl = ({voteControl, payload}) => {
  return(
    <div className="col-xs-2 col-md-1 pull-right">
      <span>
        <a onClick={() => {voteControl({...payload, option: "upVote"})}}>
          <ThumbUp style={IconStyle}/>
        </a>
        <a onClick={() => {voteControl({...payload, option: "downVote"})}}>
          <ThumbDown style={IconStyle} />
        </a>
      </span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    voteControl: (data) => dispatch(vote(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteControl);