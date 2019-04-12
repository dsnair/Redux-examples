export const INPUT_FILLED = 'INPUT_FILLED'

export const handleInput = input => dispatch => {
  return dispatch({
    type: INPUT_FILLED,
    input
  })
}
