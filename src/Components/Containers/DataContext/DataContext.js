import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import '../../../../../../../../ti-map/src/App.css';
import AppContext, { AppConsumer } from '../../../Util/Context/context.js'
import { isMobile, deviceDetect } from "react-device-detect";
import * as device from "react-device-detect";
import history from '../../../Util/history.js'

import { one, two, three, four, five } from './Actions'
import { a, a_, a__, b, c, c_, c__ } from '../___/Drawers/D/Elements/index.js'

// const { a} = a

import { set_active_nav, update_state_from_child, toggle_drawer } from './Actions'



window.device = device


const drawer_components = [
  a,a_,a__,b,b,b,c,c_,c__
]

class DataContext extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
    
      hasError: false,

      notification: false,
      
      notification_data: {
        title: 'Notification',
        content: 'This is a generic notification',
        icon: 'info-sign'
      },
    
      a: '',
      b: '',
      c: '',

      child_wrapper: {},

      active_menu: 0,

      drawers: {

          a: false,
          a_: false,
          a__: false,

          b: false,
          b_: false,
          b__: false,

          c: false,
          c_: false,
          c__: false
  
      },

      d: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ],

      // components: components({ self: this }),

      // _d_components: {

      //   a: components({ self: this })[0],
      //   a_: components({ self: this })[1],
      //   a__: components({ self: this })[2],

      //   b: components({ self: this })[3],
      //   b_: components({ self: this })[4],
      //   b__: components({ self: this })[5]

      // },

      d_components: {

        a: drawer_components[0],
        a_: drawer_components[1],
        a__: drawer_components[2],

        b: drawer_components[3],
        b_: drawer_components[4],
        b__: drawer_components[5],

        c: drawer_components[6],
        c_: drawer_components[7],
        c__: drawer_components[8]

      },

      d1: false,
      d2: false,
      d3: false,
      d4: false,
      d5: false,
      d6: false,
      d7: false,

      pages: [],

      forms_point: false,
      forms_a: false,





    }

  }

  componentWillMount = () => {
    console.log('DataContext will mount');
  }

  componentDidMount = () => {
    console.log('DataContext mounted ---> context', this.context );
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('DataContext will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('DataContext will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('DataContext did update');
  }

  componentWillUnmount = () => {
    console.log('DataContext will unmount');
  }

  render () {
    
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    const { state } = this
    const { a, b, c, components, d_components } = this.state

    return (
      
      <AppContext.Provider

          value={{

            state: state,

            self: this,

            DataContext_: this,
            
            actions: {

              one: one,
              two: two,
              three: three,
              set: {
                update_state_from_child: update_state_from_child,
                layout: {
                  nav: {
                    active: set_active_nav
                  },
                  footer: '',
                  drawers: {
                    toggle:  toggle_drawer
                  },
                  theme: ''
                },
                something: '',
                another: ''
              }
            
            },

            data: {

              a, 
              b, 
              c

            },

            components,

            d_components,

            device: { isMobile, deviceDetect },
            history: history,
            

            }}
            >

        { this.props.children}
      
      </AppContext.Provider>
    )
  }
}

export default DataContext;


DataContext.propTypes = {
  // bla: PropTypes.string,
};

DataContext.defaultProps = {
  // bla: 'test',
};


DataContext.contextType = AppContext