import Form from './Form'
import { connect } from 'react-redux'

import { handleInput } from './actions'
import { postSmurf } from '../app/actions'

const mapStateToProps = state => ({
  name: state.form.name,
  age: state.form.age,
  height: state.form.height
})

const mapDispatchToProps = dispatch => ({
  handleInput: input => dispatch(handleInput(input)),
  postSmurf: e => dispatch(postSmurf(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
