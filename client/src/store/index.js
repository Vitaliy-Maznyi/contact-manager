import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './rootReducer'

export default function configureStore() {
  return createStore(makeRootReducer(), applyMiddleware(thunk))
}
