import { connect } from 'react-redux'

import Login from './Login'
import { handleCredentials } from './actions'

const mapStateToProps = state => ({
  username: state.username,
  password: state.password
})

const mapDispatchToProps = dispatch => ({
  handleCredentials: credentials => dispatch(handleCredentials(credentials))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
