import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import '../../../../../../../../ti-map/src/App.css';
import AppContext from '../../../Util/Context/context.js'
import { isMobile, deviceDetect } from "react-device-detect";
import * as device from "react-device-detect";


import { one, two, three, four, five } from './Actions'

window.device = device

//import { Test } from './DataContext.styles';

class DataContext extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
    
      hasError: false,
    
      a: '',
      b: '',
      c: ''
    
    };
  }

  componentWillMount = () => {
    console.log('DataContext will mount');
  }

  componentDidMount = () => {
    console.log('DataContext mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('DataContext will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('DataContext will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('DataContext did update');
  }

  componentWillUnmount = () => {
    console.log('DataContext will unmount');
  }

  render () {
    
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    const { state } = this
    const { a, b, c } = this.state

    return (
      
      <AppContext.Provider

          value={{

            state: state,
            
            actions: {

              one: one,
              two: two,
              three: three
            
            },

            data: {

              a, 
              b, 
              c

            },

            device: { isMobile, deviceDetect }

            }}
            >

        { this.props.children}
      
      </AppContext.Provider>
    )
  }
}

export default DataContext;


DataContext.propTypes = {
  // bla: PropTypes.string,
};

DataContext.defaultProps = {
  // bla: 'test',
};


DataContext.contextType = AppContext