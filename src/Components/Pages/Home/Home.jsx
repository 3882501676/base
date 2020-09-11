import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Home.styles';
import AppContext from '../../../Util/Context/context.js'

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Home will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Home will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  render () {


    const { actions, data, state, device } = this.context  

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div className="HomeWrapper sans-serif f2 fw7 black ">
        {"This is home"}
        {
          device.ismobile && "this is mobile"
        }
        {
          !device.ismobile && "this is not mobile"
        }
        {
          JSON.stringify(device.deviceDetect)
        }
      </div>
    )
  }
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
Home.contextType = AppContext
