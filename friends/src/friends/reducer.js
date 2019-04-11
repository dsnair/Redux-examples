import { API_PENDING, API_FULFILLED, API_REJECTED } from './actions'

const initialState = {
  isFetching: false,
  friends: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_PENDING:
      return { ...state, isFetching: true }
    case API_FULFILLED:
      return { ...state, isFetching: false, friends: action.friends }
    case API_REJECTED:
      return { ...state, isFetching: false, error: action.error }
    default:
      return state
  }
}