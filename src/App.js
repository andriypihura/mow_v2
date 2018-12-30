import React, { Component } from 'react';

import './css/App.scss';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer';

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
          <NavBarContainer />
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

export default App;
