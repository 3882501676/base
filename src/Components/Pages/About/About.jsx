import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Content } from '../../Containers/___/index.js'
//import { Test } from './About.styles';

class About extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      data: {
        title: '',
        image: ''
      }
    };
  }

  componentWillMount = () => {
    console.log('About will mount');
  }

  componentDidMount = () => {
    console.log('About mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('About will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('About will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('About did update');
  }

  componentWillUnmount = () => {
    console.log('About will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AboutWrapper flex flex-column w-100 h-100 ">
        <div 
        id="hero" 
        className=" bg-center bg-cover pt6 pb3 ph5 bg-white bb b--black-05 "
        style={{
          // backgroundColor: '#c4ffef'
          // height: '30vh',
          // background: 'url('+ this.state.data.image +')'
        }}
        >

        <h1 className=" f2 fw6 black ">{this.state.data.title}</h1>

        </div>

        <div className="flex flex-column pa5">
        <Content self={this} entry={'6nMQtfOdPYtRLGwwsFDyGz'} page={'about'} />
        </div>

      </div>
    );
  }
}

About.propTypes = {
  // bla: PropTypes.string,
};

About.defaultProps = {
  // bla: 'test',
};

export default About;
