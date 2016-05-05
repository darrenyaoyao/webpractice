import React, { Component } from 'react';
import { Link } from 'react-router';
import fetch from 'isomorphic-fetch';

import './UsersPage.css';

class UsersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      obj: {users:[]} 
    };
    this.setVal = this.setVal.bind(this);
    this.genUser = this.genUser.bind(this);
  }

  setVal(val){
    this.setState({obj:val});
    console.log(val);
  }

  genUser(user){
    return (
      <div className="row">
        <div className="col-md-1">
          <Link to={'/users/'+user.name}> {user.name} </Link>
        </div> 
        <div className="col-md-1">{user.age}  </div>
      </div>
    )
  }

  componentDidMount() {
    console.log('aaa');
    fetch('api/users').then(function(response) {
        return response.json()}).then(this.setVal);
  }

  render() {
    return (
      <div>
        <h1>UsersPage</h1>
        {this.state.obj.users.map(this.genUser)}
      </div>
    );
  }
}

export default UsersPage;
