import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Control.styles';
import { AppContext } from 'utils'


import { control_1, control_2, control_3 } from './Controls'

class Control extends PureComponent { 
  constructor(props) {
    super(props);

    
    this.state = {
    
      c_1: false,
      c_2: false,
      c_3: false,

      active: 0,



      hasError: false,
    
    }


  }

  componentWillMount = () => {
    console.log('Control will mount');
  }

  componentDidMount = () => {
    console.log('Control mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Control will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Control will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Control did update');
  }

  componentWillUnmount = () => {
    console.log('Control will unmount');
  }

  render () {

    let { state } = this
    let { c_1, c_2, c_3, active } = state



    if (this.state.hasError) {
    
      return <h1>Something went wrong.</h1>

    }

    return (
      <AppContext.Provider
      
        value={{

          control: this,
          
          controls: { 
          
            control_1, control_2, control_3 
          
          },

          c_1, c_2, c_3, active,


          ...this.context

        }}

      >
        
        {this.props.children}

      </AppContext.Provider>
    );
  }
}

Control.propTypes = {
  // bla: PropTypes.string,
};

Control.defaultProps = {
  // bla: 'test',
};

export default Control;

Control.contextType = AppContext
