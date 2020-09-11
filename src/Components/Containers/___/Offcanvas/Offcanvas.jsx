import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Offcanvas.styles';
import AppContext from '../../../../Util/Context/context.js'

class Offcanvas extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Offcanvas will mount');
  }

  componentDidMount = () => {
    console.log('Offcanvas mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Offcanvas will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Offcanvas will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Offcanvas did update');
  }

  componentWillUnmount = () => {
    console.log('Offcanvas will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="OffcanvasWrapper">
        Test content
      </div>
    );
  }
}

Offcanvas.propTypes = {
  // bla: PropTypes.string,
};

Offcanvas.defaultProps = {
  // bla: 'test',
};

export default Offcanvas;

Offcanvas.contextType = AppContext