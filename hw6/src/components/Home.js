import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Home extends Component {
	render() {
		return (
	  	<div>
        <Link to="/chat">Enter to chatroom</Link>
      </div>
		);
	}
}

export default Home