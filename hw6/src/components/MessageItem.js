import React, { Component, PropTypes } from 'react';

class MessageItem extends Component {
  render() {
    var messageitem;
    if(this.props.message.mine)
      messageitem =     		
        (<div className="message-item message-from-me">
					<span>
            {this.props.message.word}
          </span>
				</div>);
    else
      messageitem = 
        (<div className="message-item message-from-other">
					<span>
            {this.props.message.word}
          </span>
				</div>);
    return messageitem;
  }
}
MessageItem.propTypes = { message: PropTypes.object};

export default MessageItem