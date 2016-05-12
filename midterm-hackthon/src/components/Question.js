import React, { Component } from 'react';
import {Button, Input} from 'react-materialize';
import Status from './Status';

import './Question.css';

class Question extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      question_element: {},
      user_answer: null,
      answered: false,
      correct: false
    };
    this.setQuestion = this.setQuestion.bind(this);
  }

  setQuestion(que){
    this.setState({question_element: que});
  }

  componentDidMount() {
    fetch(`/api/question/random/`).then(function(res){
      if(res.status == 404)
        throw res.status;
      return res.json();
    }).then(this.setQuestion);
  }

  handleClick(answer){
    this.setState({user_answer: answer});
  }

  sentAnswer(){
    const {question_element, user_answer} = this.state;
    this.setState({answered: true});
    if(user_answer == question_element.answer){
      this.setState({correct: true});
    }else{
      this.setState({correct: false});
    }
  }

  render() {
    const question_element = this.state.question_element;
    var status = null;
    if (this.state.answered) {
      status = [<Status className="col s6" correct={this.state.correct}/>, <Button className="col s3"onClick={this.componentDidMount.bind(this)} waves='light'>下一題</Button>];
    } 

    return (
      <div className="valign-wrapper">
        <div className="row valign">
          <div className="col s6">
            <img className="col s12" src={"/public/"+question_element.img} />
          </div>
          <div className="col s6">
            <h2 className="col s12">{question_element.question}</h2>
            <div className="col s12">
              <Input onClick={this.handleClick.bind(this, 0)} name='group1' type='radio' value='red' label={question_element.choices[0]} />
              <Input onClick={this.handleClick.bind(this, 1)} name='group1' type='radio' value='yellow' label={question_element.choices[1]} />
              <Input onClick={this.handleClick.bind(this, 2)} name='group1' type='radio' value='green' label={question_element.choices[2]}  />
              <Input onClick={this.handleClick.bind(this, 3)} name='group1' type='radio' value='brown' label={question_element.choices[3]}  />
              <Input onClick={this.handleClick.bind(this, 4)} name='group1' type='radio' value='brown' label={question_element.choices[4]}  />
            </div>
            <Button className="col s4 offset-s8" onClick={this.sentAnswer.bind(this)} waves='light'>送出</Button>
            {status}
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
