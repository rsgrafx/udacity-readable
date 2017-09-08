import React from 'react'
import {connect} from 'react-redux'

import {vote} from '../../actions'

const VoteControl = ({voteControl, payload}) => {
  return(
    <div className="col-xs-2 col-md-1 pull-right">
      <span>
        <button onClick={() => {voteControl({...payload, option: "upVote"})}}>+</button>
        <button onClick={() => {voteControl({...payload, option: "downVote"})}}>-</button>
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