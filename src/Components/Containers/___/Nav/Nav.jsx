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

    const pages_menu = [
      {
        label: 'Home',
        link: '/',
        icon: 'home'
      },
      {
        label: 'About',
        link: '/about',
        icon: 'info-sign'
      },
      {
        label: 'Contact',
        link: '/contact',
        icon: 'ring'
      },
    ]

    const cms_menu = []

    const map_menu = [
      {
        label: 'One',
        link: '/',
        icon: 'geosearch'
      },
      {
        label: 'Two',
        link: '/',
        icon: 'intersection'
      },
      {
        label: 'Three',
        link: '/',
        icon: 'predictive-analysis'
      },
      {
        label: 'Four',
        link: '/',
        icon: 'social-media'
      }    
    ]

    const menus = [
      pages_menu,
      cms_menu,
      map_menu
    ]

    const active = this.context.state.active_menu

    // alere

    const active_menu = menus[active]

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div
        style={{
          height: '10vh'
        }}
        className=" NavWrapper z-9 fixed top-0 left-0 w-100 bg-white overflow-hidden bb b--black-05 ">

        <div

          className="flex flex-row items-center justify-between h-100">

          <div
            id="logotext"
            className="flex flex-row items-center justify-start">

            <span className="pointer dim f3 tracked fw6 black-10  bebas  ph5 pv4 br b--black-05">{config.app.logotext}</span>

          </div>

          <div className="flex flex-row w-100 items-center justify-end br bl b--black-05 pv4 ph4">

            {
              active_menu.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className=" link pointer flex flex-row items-center justify-start ph4 pv3">

                  <Icon icon={item.icon} iconSize={16} style={{
                   color: '#ececec',
              fill: '#ececec'
                  }} />

                  <span className=" dim sans-serif f5 fw6 black-30 ml2">{item.label}</span>

                </Link>
              ))
            }

          </div>

          <div className="pointer flex flex-row items-center justify-center ph4 pv4 bl b--black-05">

              <button 

                style={{
                  
                  padding: '1.6vh 10vh',
                  fontWeight: '500',
                  boxShadow: '0px 2px 10px 0px #2f89fa2e'

                }}
                
                className=" pointer hover-child-slide-right flex flex-row items-center justify-center bn ph3 pv2 br1  bg-blue f5 fw6 white "
                >
                <span className="flex">{"Register"}</span>
                <span className="child  hover-child flex ml2 hover-slide-right"><Icon icon={'arrow-right'} iconSize={15} style={{ fill: 'white'}} /></span>
                
              </button>

          </div>

          <div className="pointer flex flex-row items-center justify-start ph5 pv4 bl b--black-05">

            <Icon 
            style={{
              color: '#ececec',
              fill: '#ececec'
            }}
            icon={'ring'} 
            iconSize={20} className="dim  white hover-red trans-a pointer " />

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

Nav.contextType = AppContext