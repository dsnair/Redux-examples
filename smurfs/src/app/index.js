import { connect } from 'react-redux'

import App from './App'
import { getSmurfs, postSmurf } from './actions'

const mapStateToProps = state => ({
  smurfs: state.app.smurfs,
  isFetching: state.app.isFetching
})

const mapDispatchToProps = dispatch => ({
  getSmurfs: () => dispatch(getSmurfs()),
  postSmurf: e => dispatch(postSmurf(e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
