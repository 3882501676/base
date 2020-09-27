import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppContext from 'utils/Context/context'
//import { Test } from './Cms.styles';

class Notification extends PureComponent { 
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
    // let { self } = this.context
    // let {} = self


    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (

      

      <div 
      
      style={{
      
        position: 'fixed',
        top: '10vh',
        left: 0,
        width: '100vw',
        height: '6vh'
      
      }}

      className={ 
        ( active === index ? " o-1 " : " o-1 " ) 
      + ( " bg-blue z-999 " ) 
      + ( this.context.self.state.notification ? " fadeInDown " : " fadeOutUp " ) 
      }
      
      >
        <div className=" Notification h-100 flex items-center justify-center flex-row ph4 ">
          <h5 className=" f5 fw6 white mb0 ">
            {this.context.self.state.notification_data.title}
          </h5>
          <h5 className=" f6 fw5 white-60 mb0 ml3">
            {this.context.self.state.notification_data.content}
          </h5>
        </div>

      </div>
    );
  }
}

Notification.propTypes = {
  // bla: PropTypes.string,
};

Notification.defaultProps = {
  // bla: 'test',
};

export default Notification;

Notification.contextType = AppContext