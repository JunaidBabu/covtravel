
import React from 'react';

import {
  Redirect,
} from 'react-router-dom';

import {
  Button,
  TextField,
} from '@material-ui/core';


class HomePage extends React.Component {
  state = {
    redirect: false,
    newpath: ""
  }
  constructor(props) {
    super(props);
    this.state = { value1: '', value2: '' };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) { this.setState({ value1: event.target.value }); }
  handleChange2(event) { this.setState({ value2: event.target.value }); }
  handleSubmit(event) {
    var newroute = "/route/" + this.state.value1 + "-" + this.state.value2;
    this.setState({ redirect: true, newpath: newroute });
    event.preventDefault();
  }

  render() {
    const { redirect, newpath } = this.state;
    if (redirect) {
      return <Redirect to={newpath} />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField label="Where from?" value={this.state.value} onChange={this.handleChange1} />
        <br/>
        <TextField label="Where to?" value={this.state.value} onChange={this.handleChange2}></TextField>
        <br/>
        <Button type="submit" variant="contained" color="primary">
          GO
        </Button>
      </form>
    );
  }
}

export default HomePage;