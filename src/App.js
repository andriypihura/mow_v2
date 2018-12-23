import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { changePageAction } from './actions/changePageAction';

class App extends Component {
  changePage = (path) => {
    this.props.changePageAction(path);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.changePage('some-url1')}>Test redux action1</button>
          <button onClick={() => this.changePage('some-url2')}>Test redux action2</button>
          <button onClick={() => this.changePage('some-url3')}>Test redux action3</button>
          <button onClick={() => this.changePage('some-url4')}>Test redux action4</button>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  changePageAction: (path) => dispatch(changePageAction(path))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
