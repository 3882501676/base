import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Helmet.styles';
import { Helmet } from 'react-helmet';
import AppContext from '../../../../../Util/Context/context.js'

class Helmet_ extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Helmet will mount');
  }

  componentDidMount = () => {
    console.log('Helmet mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Helmet will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Helmet will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Helmet did update');
  }

  componentWillUnmount = () => {
    console.log('Helmet will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Helmet>

          <script src="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.js"></script>
          <link href="https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css" rel="stylesheet" />

          {/* <script src="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.js"></script> */}
          {/* <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" /> */}
          <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.3.1/mapbox-gl.css' rel='stylesheet' />
          <link href='https://api.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />


          <link rel="stylesheet"
            href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css"
            type="text/css" />
          <link href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css' rel='stylesheet' />

          <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.min.js"></script>
          <link
            rel="stylesheet"
            href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css"
            type="text/css"
          />
        </Helmet>
    );
  }
}

Helmet_.propTypes = {
  // bla: PropTypes.string,
};

Helmet_.defaultProps = {
  // bla: 'test',
};

export default Helmet_;

Helmet_.contextType = AppContext