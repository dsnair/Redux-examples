import { connect } from 'react-redux'

import Smurfs from './Smurfs'

const mapStateToProps = state => ({
  smurfs: state.app.smurfs
})

export default connect(
  mapStateToProps,
  null
)(Smurfs)
