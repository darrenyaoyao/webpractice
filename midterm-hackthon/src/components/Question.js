import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RaisedButton} from 'material-ui';
import {Checkbox} from 'material-ui';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Status from './Status';

import './Question.css';

class Question extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      question_element: {},
      user_answer: [false, false, false, false, false],
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

  handleChange(answer, e, bool){
    console.log(answer+"+"+bool);
    var answers = [false, false, false, false, false];
    answers[answer] = bool;
    this.setState({user_answer: answers});
  }

  sentAnswer(){
    const {question_element, user_answer} = this.state;
    this.setState({answered: true});
    if(user_answer[question_element.answer]){
      this.setState({correct: true});
    }else{
      this.setState({correct: false});
    }
  }

  render() {
    const question_element = this.state.question_element;
    const styles = {
      block: {
        width: 100+'%'
      },
      checkbox: {
        marginBottom: 16,
      },
    };
    var status = null;
    if (this.state.answered) {
      status = [<Status className="col s6" correct={this.state.correct}/>, <RaisedButton label="下一題" className="col s3"onClick={this.componentDidMount.bind(this)} waves='light' />];
    } 

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Grid>
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <img style={styles.block} src={"/public/"+question_element.img} />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <h2 >{question_element.question}</h2>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Checkbox defaultChecked={this.state.user_answer[0]} onCheck={this.handleChange.bind(this, 0)} label={question_element.choices[0]} />
                <Checkbox defaultChecked={this.state.user_answer[1]} onCheck={this.handleChange.bind(this, 1)} label={question_element.choices[1]} />
                <Checkbox defaultChecked={this.state.user_answer[2]} onCheck={this.handleChange.bind(this, 2)} label={question_element.choices[2]} />
                <Checkbox defaultChecked={this.state.user_answer[3]} onCheck={this.handleChange.bind(this, 3)} label={question_element.choices[3]} />
                <Checkbox defaultChecked={this.state.user_answer[4]} onCheck={this.handleChange.bind(this, 4)} label={question_element.choices[4]} />
              </Col>
              <RaisedButton label="送出" onClick={this.sentAnswer.bind(this)} waves='light' />
              {status}
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default Question;
