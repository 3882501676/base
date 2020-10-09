import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Data.styles';

import imdb_data from './json/imdb-top250.json'

// import AppContext from '../../Utils/Context/context.js.js'
import { AppContext } from 'utils'

class Data extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,

      movies: imdb_data,
      
      points_a: 0,
      points_b: 0,



    };
  }

  componentWillMount = () => {
    console.log('Data will mount');
  }

  componentDidMount = () => {
    console.log('Data mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Data will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Data will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Data did update');
  }

  componentWillUnmount = () => {
    console.log('Data will unmount');
  }

  render () {

    const { movies, points_a, points_b } = this.state

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <AppContext.Provider
      
        value={{
          
          movies: movies,

          points_a, points_b,

          Data: this,

          ...this.context

        }}

      >

        {this.props.children}
      
      </AppContext.Provider>
    );
  }
}

Data.propTypes = {
  // bla: PropTypes.string,
};

Data.defaultProps = {
  // bla: 'test',
};

export default Data;
Data.contextType = AppContext
