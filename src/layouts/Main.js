import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from '../components/Navbar/Navbar';

import './Main.css';

const Main = (props) => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Matrix.io" defaultTitle="Matrix.io" defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <Navbar />
      <div id="wrapper">
        {props.children}
      </div>
    </HelmetProvider>
  )
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Matrix.io Official Website",
};

export default Main;