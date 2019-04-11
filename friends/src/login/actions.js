export const CREDENTIALS_ENTERED = 'CREDENTIALS_ENTERED'

export const handleCredentials = credentials => dispatch => {
  return dispatch({
    type: CREDENTIALS_ENTERED,
    credentials
  })
}
