import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import makeRootReducer from './rootReducer'
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage'

export default function configureStore() {
  const persistedState = loadFromLocalStorage()
  const store = createStore(makeRootReducer(), persistedState, applyMiddleware(thunk))

  store.subscribe(() => saveToLocalStorage(store.getState()))

  return store
}
