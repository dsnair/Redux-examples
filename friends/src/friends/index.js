import { connect } from 'react-redux'

import Friends from './Friends'
import { getFriends } from './actions'

const mapStateToProps = state => ({
  friends: state.friends.friends,
  isFetching: state.friends.isFetching
})

const mapDispatchToProps = dispatch => ({
  getFriends: () => dispatch(getFriends())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends)
