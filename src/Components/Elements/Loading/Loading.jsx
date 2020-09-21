import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '@blueprintjs/core'
//import { Test } from './Loading.styles';

const Loading = (props) => (
  <div 
  style={{
    height: '100vh',
    width: '100vw'
  }}
  className=" db relative h-100 w-100 items-center justify-center flex ">
  
    <Spinner size={50} intent={'none'} value={ null }  />

  </div>
);

Loading.propTypes = {
  // bla: PropTypes.string,
};

Loading.defaultProps = {
  // bla: 'test',
};

export default Loading;
