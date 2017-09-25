import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import Do from '../actions/types'
import reducer from '../reducers'

const logDetails = store => next => action => {
  console.group(action.type)
  console.info("What is dispatched.", action)
    let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
    return result
}

const savePost = store => next => action => {
  let result = next(action)
  if (action.type === Do.CREATE_POST) {
    console.log("purpose of middleware?", action)
  }
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logDetails, savePost)),
)

export default store;