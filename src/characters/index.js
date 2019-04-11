import { connect } from 'react-redux'

import Characters from './Characters'

const mapStateToProps = state => ({
  characters: state.characters
})

export default connect(
  mapStateToProps,
  null
)(Characters)
