import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
//import { createLogger } from 'redux-logger'
import home from './modules/home'

//const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  // loggerMiddleware,
)(createStore)

export const reducer = combineReducers({
  home,
})

export default initialState => createStoreWithMiddleware(reducer, initialState)
