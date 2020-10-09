import React from 'react';

import PropTypes from 'prop-types';

import { Spinner } from '@blueprintjs/core'
//import { Test } from './Loading.styles';

const Loading = (props) => (
  <Spinner intent={'primary'} size={40} />
);

Loading.propTypes = {
  // bla: PropTypes.string,
};

Loading.defaultProps = {
  // bla: 'test',
};

export default Loading;
