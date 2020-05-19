import actions from './actions'

const initialState = {
  contact: {},
  loading: false,
  errors: [],
}

export default (state = initialState, action) => {
  const handler = actions[action.type]

  return handler ? handler(state, action) : state
}
