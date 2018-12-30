import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faListAlt, faUserCircle, faHeart} from '@fortawesome/free-regular-svg-icons'
import styles from './NavBarContainer.module.scss';

class NavBarContainer extends Component {

  changePage(path) {
    console.log(path);
  }

  render() {
    console.log(styles);

    return (
      <div className={styles.main}>
        <div className={`${styles.mainItem} block-corners`} onClick={() => this.changePage('search')}>
          <FontAwesomeIcon icon={faSearch} />
          <span>Пошук</span>
        </div>
        <div className={`${styles.mainItem} block-corners`} onClick={() => this.changePage('favorites')}>
          <FontAwesomeIcon icon={faHeart} />
          <span>Улюблені</span>
        </div>
        <div className={`${styles.mainItem} block-corners`} onClick={() => this.changePage('menus')}>
          <FontAwesomeIcon icon={faListAlt} />
          <span>Меню</span>
        </div>
        <div className={`${styles.mainItem} block-corners`} onClick={() => this.changePage('profile')}>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>Профіль</span>
        </div>
      </div>
    );
  }
}

export default NavBarContainer;
