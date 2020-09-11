import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Wrapper.styles';
import AppContext from '../../../Util/Context/context.js'
import { DataContext } from '../DataContext/index.js'
import { isMobile } from "react-device-detect";
import { Route, Router, Switch } from "react-router-dom";
import history from "../../../Util/history.js";
import { Helmet } from './Elements/Helmet/index.js'

import { Cms, Content, Dialogs, Drawers, Map, Nav, Offcanvas, Overlay } from '../___/index.js'

// import mouseTrap from 'react-mousetrap';
var Mousetrap = require('mousetrap');

let active = 0

class Wrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      active: 0
    }

    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)

  }

  componentWillMount = () => {


  }

  next = () => {


    let active = this.state.active

    let __ = active === 2 ? active : active + 1

    this.setState({

      active: __  
    
    })

  }
  prev = () => {

    let active = this.state.active

    let __ = active === 0 ? active : active -1

    this.setState({

      active: __  
    
    })

  }

  componentDidMount = () => {

    Mousetrap.bind("left", this.prev)

    Mousetrap.bind("right", this.next)
  }

  componentWillReceiveProps = (nextProps) => {
    // console.log('Wrapper will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    // console.log('Wrapper will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    // console.log('Wrapper did update');
  }

  componentWillUnmount = () => {
    // console.log('Wrapper will unmount');

    Mousetrap.unbind("left")
    
    Mousetrap.unbind("right")

  }

  render() {

    let { active } = this.state

    if (this.state.hasError) {
      
      return <h1>Something went wrong.</h1>

    }
    return (

      <DataContext>

        <Helmet />

        <Nav />

        <Main>

          <Cms index={0} self={this} />

          <Content index={1} self={this} />

          <Map index={2} self={this} />

          {this.props.children}

        </Main>

        <Overlay />

        <Drawers />

        <Dialogs />

        <Offcanvas />

      </DataContext>

    )
  }
}

Wrapper.propTypes = {
  // bla: PropTypes.string,
};

Wrapper.defaultProps = {
  // bla: 'test',
};

export default Wrapper;

Wrapper.contextType = AppContext


const Main = (props) => (
  <>

    { props.children }

  </>
)