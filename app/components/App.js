import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import Clock from './Clock';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(eventObject) {
    this.setState({ newDeadline: eventObject.target.value });
  }

  handleClick() {
    this.setState({
      deadline: this.state.newDeadline,
      newDeadline: ''
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <Form inline={true}>
          <FormControl onChange={this.handleChange} value={this.state.newDeadline}></FormControl>
          <Button onClick={this.handleClick}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
