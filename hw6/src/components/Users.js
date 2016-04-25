import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Users extends Component {
	render() {
		return (
	  	<div>
        <Link to="/chat">In the Users</Link>
      </div>
		);
	}
}

export default Users