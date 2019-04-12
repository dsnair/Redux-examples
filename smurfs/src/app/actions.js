import axios from 'axios'

export const GET_PENDING = 'GET_PENDING'
export const GET_FULFILLED = 'GET_FULFILLED'
export const GET_REJECTED = 'GET_REJECTED'

export const POST_PENDING = 'POST_PENDING'
export const POST_RESOLVED = 'POST_RESOLVED'
export const POST_REJECTED = 'POST_REJECTED'

export const getSmurfs = () => async dispatch => {
  try {
    dispatch({ type: GET_PENDING })
    const response = await axios.get('http://localhost:3333/smurfs')
    dispatch({ type: GET_FULFILLED, smurfs: response.data })
  } catch (error) {
    dispatch({
      type: GET_REJECTED,
      error: `API didn't resolve`
    })
  }
}

export const postSmurf = e => async (dispatch, getState) => {
  try {
    e.preventDefault()
    dispatch({ type: POST_PENDING })

    const { app, form } = getState()
    if (!form.name || !form.age || !form.height) return

    const newSmurf = { name: form.name, age: form.age, height: form.height, id: app.smurfs.length }

    const response = await axios.post('http://localhost:3333/smurfs', newSmurf)
    dispatch({ type: POST_RESOLVED, smurfs: response.data })
  } catch (error) {
    dispatch({
      type: POST_REJECTED,
      error: `API didn't resolve`
    })
  }
}
