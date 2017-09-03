import {createStore, applyMiddleware, compose} from 'redux'

import reducer from '../reducers'

const logDetails = store => next => action => {
  console.group(action.type)
  console.info("What is dispatched.", action)
    let result = next(action) 
  console.log('next state', store.getState())
  console.groupEnd(action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logDetails)
))

export default store;