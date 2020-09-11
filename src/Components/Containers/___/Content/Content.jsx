import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Content.styles';
import AppContext from '../../../../Util/Context/context.js'

class Content extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Content will mount');
  }

  componentDidMount = () => {
    console.log('Content mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Content will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Content will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Content did update');
  }

  componentWillUnmount = () => {
    console.log('Content will unmount');
  }

  render () {

    const { index, self } = this.props 
    const { state } = self 
    const { active } = state 


    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (

      <div 
      
      style={{
      
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      
      }}

      className={ 
        ( active === index ? " o-1 " : " o-0 " ) 
      + ( " bg-green " ) }
      
      >
        
        <div className="ContentWrapper">
        
          Test content
        
        </div>

      </div>
    );
  }
}

Content.propTypes = {
  // bla: PropTypes.string,
};

Content.defaultProps = {
  // bla: 'test',
};

export default Content;
Content.contextType = AppContext