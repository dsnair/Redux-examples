import { CREDENTIALS_ENTERED } from './actions'

const initialState = {
  username: '',
  password: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREDENTIALS_ENTERED:
      return { ...state, ...action.credentials }
    default:
      return state
  }
}
