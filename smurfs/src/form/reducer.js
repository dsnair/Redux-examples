import { INPUT_FILLED } from './actions'

const initialState = {
  name: '',
  age: '',
  height: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INPUT_FILLED:
      return { ...state, ...action.input }

    default:
      return state
  }
}
