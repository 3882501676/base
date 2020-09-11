import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Dialogs.styles';
import AppContext from '../../../../Util/Context/context.js'

class Dialogs extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Dialogs will mount');
  }

  componentDidMount = () => {
    console.log('Dialogs mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Dialogs will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Dialogs will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Dialogs did update');
  }

  componentWillUnmount = () => {
    console.log('Dialogs will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="DialogsWrapper">
        Test content
      </div>
    );
  }
}

Dialogs.propTypes = {
  // bla: PropTypes.string,
};

Dialogs.defaultProps = {
  // bla: 'test',
};

export default Dialogs;

Dialogs.contextType = AppContext