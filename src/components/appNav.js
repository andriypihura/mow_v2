import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faListAlt, faUserCircle, faHeart} from '@fortawesome/free-regular-svg-icons'

import './../css/helpers.css';
import './../css/appNav.css';
import { changePageAction } from './../actions/changePageAction';

class AppNav extends Component {
  changePage = (path) => {
    this.props.changePageAction(path);
  }

  render() {
    return (
      <div className="app-nav">
        <div className="app-nav--item block-corners" onClick={() => this.changePage('search')}>
          <FontAwesomeIcon icon={faSearch} />
          <span>Пошук</span>
        </div>
        <div className="app-nav--item block-corners" onClick={() => this.changePage('favorites')}>
          <FontAwesomeIcon icon={faHeart} />
          <span>Улюблені</span>
        </div>
        <div className="app-nav--item block-corners" onClick={() => this.changePage('menus')}>
          <FontAwesomeIcon icon={faListAlt} />
          <span>Меню</span>
        </div>
        <div className="app-nav--item block-corners" onClick={() => this.changePage('profile')}>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>Профіль</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
