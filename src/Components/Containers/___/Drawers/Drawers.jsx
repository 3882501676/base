import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Drawers.styles';
import AppContext from '../../../../Util/Context/context.js'

class Drawers extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Drawers will mount');
  }

  componentDidMount = () => {
    console.log('Drawers mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Drawers will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Drawers will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Drawers did update');
  }

  componentWillUnmount = () => {
    console.log('Drawers will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="DrawersWrapper">
        Test content
      </div>
    );
  }
}

Drawers.propTypes = {
  // bla: PropTypes.string,
};

Drawers.defaultProps = {
  // bla: 'test',
};

export default Drawers;
Drawers.contextType = AppContext