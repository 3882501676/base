import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Nav.styles';
import AppContext from "../../../../Util/Context/context.js";
import { Icon } from "@blueprintjs/core";
import config from "../../../../config.json";
import { Link } from "react-router-dom";

class Nav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log("Nav will mount");
  };

  componentDidMount = () => {
    console.log("Nav mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("Nav will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Nav will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Nav did update");
  };

  componentWillUnmount = () => {
    console.log("Nav will unmount");
  };

  render() {
    // const menus = [
    //   pages_menu,
    //   cms_menu,
    //   map_menu
    // ]

    // const active = this.context.state.active_menu

    // // alere

    // const active_menu = menus[active]

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div
        style={{
          height: "10vh",
        }}
        className=" NavWrapper z-9999 fixed top-0 left-0 w-100 bg-white overflow-hidden bb b--black-05 "
      >
        <div className="flex flex-row items-center justify-between h-100">
          <div
            id="logo"
            className="flex flex-row items-center justify-start br b--black-05"
          >
            <span
              style={{
                backgroundImage: "url(/logos/aztec.png)",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                width: "60px",
                height: "60px",
              }}
              className="flex"
            ></span>
          </div>

          {/* <div className="flex flex-row w-100 items-center justify-end br-bl b--black-05 pv4 ph4">

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

          </div> */}

          <Spacer />

          <div
            onMouseEnter={() => {
              this.context.self.setState({
                d5: !this.context.self.state.d5,
                d4: false,
              });
            }}
            // onMouseLeav
            className="pointer flex flex-row items-center justify-start ph4 pv0 h-100 bl b--black-05"
          >
            <Icon
              style={{
                color: "rgb(39, 69, 249)",
                fill: "rgb(39, 69, 249)",
                top: "3px",
              }}
              icon={"search-around"}
              iconSize={20}
              className="dim  white hover-red trans-a pointer relative "
            />
          </div>

          <div className="pointer flex flex-row items-center justify-center ph3 pv4 bl b--black-05">
            <button
              style={{
                padding: "1.6vh 7vh",
                fontWeight: "500",
                boxShadow: "0px 2px 10px 0px #2f89fa2e",
              }}
              className=" dim pointer hover-child-slide-right flex flex-row items-center justify-center bn ph2 pv2 br2  bg-blue "
            >
              <span className="flex ttu tracked  f5 fw7 white">
                {"Register"}
              </span>

              <div
                className="flex relative "
                style={{
                  right: "1vw",
                  top: "-9px",
                }}
              >
                <span className="absolute child  hover-child flex ml2 hover-slide-right">
                  <Icon
                    icon={"arrow-right"}
                    iconSize={15}
                    style={{ fill: "white" }}
                  />
                </span>
              </div>
            </button>
          </div>

          <div
            onMouseEnter={() => {
              this.context.self.setState({
                d4: !this.context.self.state.d4,
                // d3: !this.context.self.state.d3,
                // d2: !this.context.self.state.d2,
                // d1: !this.context.self.state.d1,
                d5: false,
                // d6: !this.context.self.state.d6,
              });
            }}
            // onMouseLeav
            className="pointer flex flex-row items-center justify-start ph4 pv0 h-100 bl b--black-05"
          >
            <Icon
              style={{
                color: "rgb(39, 69, 249)",
                fill: "rgb(39, 69, 249)",
                top: "3px",
              }}
              icon={"ring"}
              iconSize={20}
              className="dim  white hover-red trans-a pointer relative "
            />
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

Nav.contextType = AppContext;

const Spacer = () => <div id="spacer" className="flex flex-auto w-100"></div>;
