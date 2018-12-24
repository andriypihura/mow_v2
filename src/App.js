import React, { Component } from 'react';
import { connect } from 'react-redux';

import './css/app.css';
import './css/helpers.css';
import { changePageAction } from './actions/changePageAction';
import AppNav from './components/appNav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app--header">
          <div className="app--header-text -main">
            Привіт, Андрій!
          </div>
          <div className="app--header-text -secondary">
            Якийсь трішки довший текс-запитання?
          </div>
        </div>
        <div className="app--body">
          <AppNav />
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
        </div>
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
