import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class User extends Component {
	componentDidMount() {
  this.setState({
    // route components are rendered with useful information, like URL params
    	user: findUserById(this.props.params.userId)
  	})
  }
	render() {
		return (
	  	<div>
        <Link to="/chat">In the User</Link>
      </div>
		);
	}
}

export default User