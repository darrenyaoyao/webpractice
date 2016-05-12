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
  correct: false
};

Status.propTypes = {
  correct: React.PropTypes.bool
};
export default Status;