import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SocialButton from './Elements/SocialLogin/login.js'

import AppContext from '../../../Util/Context/context.js'
//import { Test } from './Login.styles';



class Login extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
  handleSocialLogin = (user) => {
    console.log(user)
    this.context.history.push('/home')

  }
  
  handleSocialLoginFailure = (err) => {
    console.error(err)
  }
  
  componentWillMount = () => {
    console.log('Login will mount');
  }

  componentDidMount = () => {
    console.log('Login mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Login will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Login will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Login did update');
  }

  componentWillUnmount = () => {
    console.log('Login will unmount');
  }

  render () {

    if (this.state.hasError) {
    
      return <h1>Something went wrong.</h1>;
    
    }

    return (

      <div 
      style={{
        height: '90vh',
        width: '100vw',
        top: '10vh'
      }}
      className="LoginWrapper flex z-99 w-100 h-100 bg-near-white relative items-center justify-center ">
      
        <SocialButton
            provider='google'
            appId='499531090165-81gt3aobf1bualpsb41c0hfmvb050evr.apps.googleusercontent.com'
            onLoginSuccess={this.handleSocialLogin}
            onLoginFailure={this.handleSocialLoginFailure}
            className="flex flex-row bn round pl2 pr3 pv2 items-center pointer dim grow"
          >
          <div 
          style={{
            width: '50px',
            height:'50px',
            background: 'url(/icons/google.svg)'
          }}
          className=" bg-center bg-contain no-repeat"></div>
            <span className="  flex f5 fw6 black pr4 pl3 sans-serif">
            
                Login with Google
              
            </span>


        </SocialButton>

      </div>

    )
    }
}

Login.propTypes = {
  // bla: PropTypes.string,
};

Login.defaultProps = {
  // bla: 'test',
};

export default Login;

Login.contextType = AppContext