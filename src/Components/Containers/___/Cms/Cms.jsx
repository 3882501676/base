import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../../Util/Context/context.js'
//import { Test } from './Cms.styles';

class Cms extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Cms will mount');
  }

  componentDidMount = () => {
    console.log('Cms mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Cms will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Cms will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Cms did update');
  }

  componentWillUnmount = () => {
    console.log('Cms will unmount');
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
      + ( " bg-orange " ) }
      
      >
        <div className=" Cms h-100 flex items-center justify-center ">
          <h1 className=" f1 fw6 white ">{"CMS"}</h1>
        </div>

      </div>
    );
  }
}

Cms.propTypes = {
  // bla: PropTypes.string,
};

Cms.defaultProps = {
  // bla: 'test',
};

export default Cms;

Cms.contextType = AppContext