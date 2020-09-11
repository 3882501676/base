import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Overlay.styles';
import AppContext from '../../../../Util/Context/context.js'

class Overlay extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Overlay will mount');
  }

  componentDidMount = () => {
    console.log('Overlay mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Overlay will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Overlay will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Overlay did update');
  }

  componentWillUnmount = () => {
    console.log('Overlay will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="OverlayWrapper">
        Test content
      </div>
    );
  }
}

Overlay.propTypes = {
  // bla: PropTypes.string,
};

Overlay.defaultProps = {
  // bla: 'test',
};

export default Overlay;

Overlay.contextType = AppContext