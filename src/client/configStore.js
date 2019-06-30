import {
  applyMiddleware, createStore, compose, combineReducers,
} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { localizeReducer } from 'react-localize-redux'
import { reducer as rootReducer } from '../shared/redux'

export default function configStore(state) {
  const loggerMiddleware = createLogger()
  /*const reducer = combineReducers({
    rootReducer,
    localize: localizeReducer,
  })*/
  return compose(applyMiddleware(thunk, loggerMiddleware))(createStore)(
    rootReducer,
    state,
  )
}
