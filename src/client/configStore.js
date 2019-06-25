import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer as rootReducer } from '../shared/redux'

export default function configStore(state) {
  const loggerMiddleware = createLogger()
  return compose(applyMiddleware(thunk, loggerMiddleware))(createStore)(
    rootReducer,
    state,
  )
}
