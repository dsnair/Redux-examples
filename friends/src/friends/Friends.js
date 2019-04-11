import React, { Component } from 'react'

class Friends extends Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.isFetching && 'Fetching data ...'}
        {this.props.friends.length > 0
          ? this.props.friends.map(friend => <p key={friend.id}>{friend.name}</p>)
          : 'No data'}
      </React.Fragment>
    )
  }
}

export default Friends
