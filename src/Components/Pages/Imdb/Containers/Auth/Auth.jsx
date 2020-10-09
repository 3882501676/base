import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './Auth.styles';

import { AppContext } from 'utils'

// const { AppContext } = context


class Auth extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Auth will mount');
  }

  componentDidMount = () => {
    console.log('Auth mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Auth will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Auth will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('Auth did update');
  }

  componentWillUnmount = () => {
    console.log('Auth will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
    this.props.children
    );
  }
}

export default Auth

Auth.propTypes = {
  // bla: PropTypes.string,
};

Auth.defaultProps = {
  // bla: 'test',
};

Auth.contextType = AppContext

// const mapStateToProps = state => ({
//   // blabla: state.blabla,
// });

// const mapDispatchToProps = dispatch => ({
//   // fnBlaBla: () => dispatch(action.name()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Auth);
