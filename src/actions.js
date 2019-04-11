import axios from 'axios'

export const API_PENDING = 'API_PENDING'
export const API_FULFILLED = 'API_FULFILLED'
export const API_REJECTED = 'API_REJECTED'

export const getCharacters = () => async dispatch => {
  try {
    dispatch({ type: API_PENDING })
    const response = await axios.get('https://swapi.co/api/people/')
    dispatch({ type: API_FULFILLED, characters: response.data.results })
  } catch (error) {
    dispatch({
      type: API_REJECTED,
      error: `API didn't resolve`
    })
  }
}
