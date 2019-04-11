import axios from 'axios'

export const API_PENDING = 'API_PENDING'
export const API_FULFILLED = 'API_FULFILLED'
export const API_REJECTED = 'API_REJECTED'

export const getFriends = () => async dispatch => {
  try {
    dispatch({ type: API_PENDING })
    const response = await axios
      .create({
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ'
        }
      })
      .get('http://localhost:5000/api/friends')
    dispatch({ type: API_FULFILLED, friends: response.data })
  } catch (error) {
    dispatch({
      type: API_REJECTED,
      error: `API didn't resolve`
    })
  }
}
