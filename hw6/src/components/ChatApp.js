import React, { Component, PropTypes } from 'react';
import ThreadItem from './ThreadItem'
import MessageItem from './MessageItem'

// ChatApp: 原本的 HTML
class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = { users: this.props.users,
                   current_user: 0
                 };
  }
  _handleKeyPress(event){
    if (event.key === 'Enter' && event.target.value != '') {
      var mes = event.target.value;
      var date = new Date();
      var show_time = date.getHours() + ":" + date.getMinutes();
      this.setState((e)=>{
        e.users[e.current_user].messages.push({
          mine: true,
          time: show_time,
          word: mes});
      });
      event.target.value = '';
    }
  }
  changeuser(i){
    this.setState({
      current_user: i
    });
  }
  render() {
    // html -> jsx
    return(
    <div className="chat-app clearfix">
		<div className="chat-app_left">
			<div className="heading">
				<h3 className="messenger-title">Messager</h3>
      </div>
			<div className="thread-list">
        {this.state.users.map(function(object, i, array){
          return <ThreadItem user={object} key={i} changeuser={this.changeuser.bind(this, i)}/>;
        }.bind(this))}
			</div>
		</div>
		<div className="chat-app_right">
			<div className="heading">
				<div className="current-target">
          {this.state.users[this.state.current_user].name}
        </div>
			</div>
			<div className="message-list">
        {this.state.users[this.state.current_user].messages.map(function(object, i){
          return <MessageItem message={object} key={i}/>;
        })}
			</div>
			<div className="footer">
				<input className="new-message" type="text" onKeyPress = {this._handleKeyPress.bind(this)}/>
			</div>
		</div>
	</div>
    );
  }
}

ChatApp.defaultProps = { users: [
  {
    name: 'Elsa',
    pic: 'http://lorempixel.com/50/50/people/1',
    messages: [{
      mine: true,
      time: '12:00',
      word: '對啊'
    }]
   },{
    name: 'Katharine',
    pic: 'http://lorempixel.com/50/50/people/9',
    messages: [{
      mine: false,
      time: '12:00',
      word: '嘿嘿'
      },{
      mine: true,
      time: '14:00',
      word: '我爽'     
      }]
  }] };
ChatApp.propTypes = { users: PropTypes.array};

export default ChatApp