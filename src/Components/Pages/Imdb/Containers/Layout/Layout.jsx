import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Layout.styles';
import { AppContext } from 'utils'

import { Loading } from './Elements'

class Layout extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      
  
      a: false,
      b: false,
      c: false,

      theme: 'green',
      player_scores: false,
      quiz_state: 'normal',

      
      hasError: false,
  
    }
  
  }

  componentWillMount = () => {
    console.log('Layout will mount');
  }

  componentDidMount = () => {
    console.log('Layout mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Layout will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Layout will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Layout did update');
  }

  componentWillUnmount = () => {
    console.log('Layout will unmount');
  }

  render () {

    let { a, b, c, theme, player_scores, quiz_state } = this.state 

    if (this.state.hasError) {
    
      return <h1>Something went wrong in Layout.jsx</h1>;
    
    }

    return (
      <AppContext.Provider
      
        value={{

          a, b, c,

          theme,

          player_scores, 

          quiz_state,

          layout: this,


          ...this.context

        }}

      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
Layout.contextType = AppContext
