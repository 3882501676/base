import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Wrapper.styles';
import AppContext from '../../../Util/Context/context.js'
// import { DataContext } from 'containers'
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
 
    const { actions } = this.context

    // actions.set.update_state_from_child({ child: 'wrapper', data: this.state })
    



    let __ = active === 2 ? active : active + 1


    actions.set.layout.nav.active({ self: this.context.self, active: __ })

    this.setState({

      active: __

    })



  }
  prev = () => {

    let active = this.state.active

    const { actions } = this.context

    // actions.set.update_state_from_child({ child: 'wrapper', data: this.state })
    
    let __ = active === 0 ? active : active - 1
    
    actions.set.layout.nav.active({ self: this.context.self, active: __ })
    
    this.setState({

      active: __

    })


  }

  componentDidMount = () => {

    console.log('Wrapper : mounted : context ---> ', this.context )

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

      <AppContext.Consumer>
        {
          props => (

            console.log('AppContext.Consumer : props ---> ',props),
              
              <>

              <Helmet />

              <Nav />

              <Main>

                <Pages index={0} active={active} self={this} >

                  {this.props.children}

                </Pages>

                <Cms index={1} active={active} self={this} />

                {/* <Content index={2} self={this} /> */}

                <Map index={2} active={active} self={this} />

              </Main>

              <Overlay />

              <Drawers />

              <Dialogs />

              <Offcanvas />

              </>
          )
        }

      </AppContext.Consumer>

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


const Children = (props) => (
  <div
    style={{
      height: '90vh',
      width: '100vw',
      top: '10vh'
    }}
    className=" relative flex flex-column w-100 h-100 z-99 ">

    {props.children}

  </div>
)
const Main = (props) => (
  <section id="Main">

    {props.children}

  </section>
)

const Pages = (props) => {


  const { index, self, children } = props
  const { state } = self
  const { active } = state

  return (
    <div

      style={{

        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'

      }}

      className={
        (active === index ? " o-1 " : " o-0 ")
        + (" bg-white ")}

    // style={{
    //   height: '90vh',
    //   width: '100vw',
    //   top: '10vh'
    // }}
    // className=" relative flex flex-column w-100 h-100 z-1 bg-white  "

    >

      {children}

    </div>
  )

}



