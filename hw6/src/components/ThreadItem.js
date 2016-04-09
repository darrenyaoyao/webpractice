import React, { Component, PropTypes } from 'react';


class ThreadItem extends Component {
  lastmessage(){
    var message_len = this.props.user.messages.length;
    return this.props.user.messages[message_len-1].word;
  }
  lastmessagetime(){
    var message_len = this.props.user.messages.length;
    return this.props.user.messages[message_len-1].time;
  }
  render() {
    // html -> jsx
    return(
    <li className="thread-item" onClick={this.props.changeuser}>
					<a className="_1ht5 _5l-3">
						<div className="clearfix">
							<div className="thread-item_left">
								<img className="img-circle" src={this.props.user.pic} width="50" height="50" alt="" className="img"/>
							</div>
							<div className="thread-item_right">
								<div className="thread-from">
                  {this.props.user.name}
								</div>
								<div>
									<span className="thread-content">
                    {this.lastmessage()}
                  </span>
								</div>
								<span className="thread-time">
                  {this.lastmessagetime()}
                </span>
							</div>
						</div>
					</a>
				</li>
    );
  }
}

ThreadItem.propTypes = { user: PropTypes.object};

export default ThreadItem