import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

const Header = (props) => {
  const {authorizationStatus, email} = props;
  const changeAuthLogo = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Link to='/favorites' className="header__nav-link header__nav-link--profile">
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">{email}</span>
      </Link>
    }
    return <Link to='/login' className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__user-name user__name">Sign In</span>
    </Link>
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to='/'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {changeAuthLogo()}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.authorizationStatus,
    email: state.email,
  };
};


export {Header}
export default connect(mapStateToProps,)(Header);
