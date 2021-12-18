import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = (props) => {
  return (
    <div className="page page--favorites-empty">
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Error</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">404 Not Found.</b>
              <a href={`#`} className="favorites__status-description">Перейти на главную</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
