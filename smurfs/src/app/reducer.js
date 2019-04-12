import {
  GET_PENDING,
  GET_FULFILLED,
  GET_REJECTED,
  POST_PENDING,
  POST_RESOLVED,
  POST_REJECTED
} from './actions'

const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PENDING:
      return { ...state, isFetching: true }

    case GET_FULFILLED:
      return { ...state, isFetching: false, smurfs: action.smurfs }

    case GET_REJECTED:
      return { ...state, isFetching: false, error: action.error }

    case POST_PENDING:
      return { ...state, isPosting: true }

    case POST_RESOLVED:
      return { ...state, isPosting: false, smurfs: action.smurfs }

    case POST_REJECTED:
      return { ...state, isPosting: false, error: action.error }

    default:
      return state
  }
}
