import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Nav.styles';
import AppContext from '../../../../Util/Context/context.js'
import { Icon } from '@blueprintjs/core'
import config from '../../../../config.json'
import { Link } from 'react-router-dom'

class Nav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Nav will mount');
  }

  componentDidMount = () => {
    console.log('Nav mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Nav will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Nav will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Nav did update');
  }

  componentWillUnmount = () => {
    console.log('Nav will unmount');
  }

  render() {

    const items = [
      {
        label: 'Home',
        link: '/',
        icon: ''
      },
      {
        label: 'About',
        link: '/about',
        icon: ''
      },
      {
        label: 'About',
        link: '/',
        icon: ''
      },
    ]

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div
        style={{
          height: '10vh'
        }}
        className=" NavWrapper z-9 fixed top-0 left-0 w-100 bg-white shadow-1 ">

        <div

          className="flex flex-row items-center justify-between h-100">

          <div
            id="logotext"
            className="flex flex-row items-center justify-start">

            <span className="pointer dim grow f3 tracked fw6 black- orange  bebas  ph4">{config.app.logotext}</span>

          </div>

          <div className="flex flex-row">

            {
              items.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className=" pointer flex flex-row items-center justify-start ph2 pv2">

                  <Icon icon={item.icon} iconSize={20} />

                  <span className=" grow dim sans-serif f5 fw6 black">{item.label}</span>

                </Link>
              ))
            }

          </div>

          <div className="flex flex-row items-center justify-start ph4">

            <Icon icon={'menu'} iconSize={20} className="dim grow black-10 hover-red trans-a pointer " />

          </div>


        </div>

      </div>
    );
  }
}

Nav.propTypes = {
  // bla: PropTypes.string,
};

Nav.defaultProps = {
  // bla: 'test',
};

export default Nav;
