import React, { Component } from 'react';


class Status extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    var feedback;
    if(this.props.correct){
      feedback = "答對了！"
    }else if (this.props.timeout) {
      feedback = "時間到了！"
    }else{
      feedback = "答錯了！"
    }

    return (
      <div>
        <h3>{feedback}</h3>
      </div>
    );
  }
}

Status.defaultProps = {
  correct: false,
  timeout: false
};

Status.propTypes = {
  correct: React.PropTypes.bool,
  timeout: React.PropTypes.bool
};
export default Status;