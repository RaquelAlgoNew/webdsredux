import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import {getData} from './redux/actions/index'
import { DS, EP } from './redux/constants/actionTypes';
class App extends Component {
  componentDidMount() {
    this.props.getData(DS);
    this.props.getData(EP)
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default connect(null,{getData})(App);
