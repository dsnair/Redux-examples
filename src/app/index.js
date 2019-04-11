import { connect } from 'react-redux'

import App from './App'
import { getCharacters } from '../actions'

const mapStateToProps = state => ({
  characters: state.characters,
  isFetching: state.isFetching
})

const mapDispatchToProps = dispatch => ({
  getCharacters: () => dispatch(getCharacters())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
