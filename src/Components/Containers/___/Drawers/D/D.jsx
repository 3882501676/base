import React from "react";
import PropTypes from "prop-types";
//import { Test } from './D.styles';
import { Drawer } from "antd";
import AppContext, {
  AppConsumer,
} from "../../../../../Util/Context/context.js";
// import D from '.';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

const D = () => (
  <AppContext.Consumer>
    {(props) => (
      console.log(' D : consumer : props ----> ',props),
      (
        <>
          <Drawer
            width={ isBrowser ? 500 : '100vw' }
            closable={true}
            onClose={() => {
              props.self.setState({
                d1: !props.state.d1,
              });
            }}
            placement={"right"}
            visible={props.state.d1}
            style={{
              height: "90vh",
              top: "10vh",
            }}
          >
            <props.d_components.a props={props} />

            <Drawer
              width={500}
              closable={true}
              onClose={() => {
                props.self.setState({
                  d2: !props.state.d2,
                });
              }}
              placement={"right"}
              visible={props.state.d2}
              style={
                isBrowser ? {
                height: "90vh",
                top: "10vh",
              } : {
                height: "90vh",
                top: "10vh",
              } }
            >
              <props.d_components.a_ props={props} />

              <Drawer
                width={500}
                closable={true}
                onClose={() => {
                  props.self.setState({
                    d3: !props.state.d3,
                  });
                }}
                placement={"right"}
                visible={props.state.d3}
                style={{
                  height: "90vh",
                  top: "10vh",
                }}
              >
                <props.d_components.a__ props={props} />
              </Drawer>
            </Drawer>
          </Drawer>

{/* { props.state.d4 &&  */}
          <Drawer
            width={"100vw"}
            height={ isBrowser ? "26vh" : "90vh" }
            closable={false}
            onClose={() => {
              props.self.setState({
                d4: !props.state.d4,
              });
            }}
            placement={"top"}
            // mask={'false'}
            visible={props.state.d4}
            style={{
              // height: "100vh",
              top: "10vh",
            }}
            bodyStyle={{
              background: "blue",
            }}
          >
            <props.d_components.b props={props} />
          </Drawer>
{/* } */}

         {/* { props.state.d5 &&  */}
         <Drawer
            width={"100vw"}
            height={ isBrowser ? "15vh" : "90vh" }
            closable={false}
            onClose={() => {
              props.self.setState({
                d5: !props.state.d5,
              });
            }}
            placement={"top"}
            // mask={'false'}
            visible={props.state.d5}
            style={{
              // height: '100vh',
              top: "10vh",
            }}
            bodyStyle={{
              // background: "blue",
            }}
          >
            <props.d_components.c props={props} />

           
          </Drawer>
          <Drawer
            width={"100vw"}
            height={"30vh"}
            closable={false}
            onClose={() => {
              props.self.setState({
                d5: !props.state.d5,
              });
            }}
            placement={"top"}
            // mask={'false'}
            visible={props.state.d6}
            style={{
              // height: '100vh',
              top: "25vh",
              zIndex: 1
            }}
            bodyStyle={{
              // background: "blue",
            }}
          >
            <props.d_components.c_ props={props} />

            
          </Drawer>

         {/* } */}
        </>
      )
    )}
  </AppContext.Consumer>
);

D.propTypes = {
  active: PropTypes.number,
  d_components: PropTypes.object,
};

D.defaultProps = {
  active: 0,
  d_components: {},
};

export default D;

D.contextType = AppContext;
