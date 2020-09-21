import React from "react";
import PropTypes from "prop-types";
//import { Test } from './D.styles';
import { Drawer } from "antd";
import AppContext, {
  AppConsumer,
} from "../../../../../Util/Context/context.js";
// import D from '.';

const D = () => (
  <AppContext.Consumer>
    {(props) => (
      console.log(' D : consumer : props ----> ',props),
      (
        <>
          <Drawer
            width={500}
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
              style={{
                height: "90vh",
                top: "10vh",
              }}
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
            height={"26vh"}
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
            height={"15vh"}
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
