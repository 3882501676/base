import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Content } from "../../Containers/___/index.js";
import { Loading } from '../../Elements'
import { Spinner } from '@blueprintjs/core'
//import { Test } from './About.styles';

class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      ready: true,
      data: {
        headline: '',
        title: "",
        image: "",
      },
    };
  }

  componentWillMount = () => {
    console.log("About will mount");
  };

  componentDidMount = () => {
    console.log("About mounted");
  };

  componentWillReceiveProps = (nextProps) => {
    console.log("About will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("About will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("About did update");
  };

  componentWillUnmount = () => {
    console.log("About will unmount");
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Wrapper>

        { !this.state.ready && <Loading /> }
        
        { this.state.ready && 
        <>
          <Hero text={this.state.data.title} />

          <Section columns={1}>
            <Headline text={this.state.data.headline} />
          </Section>

          <Section columns={3}>
            <Content
              self={this}
              entry={"6nMQtfOdPYtRLGwwsFDyGz"}
              page={"about"}
            />
          </Section>
          
          <div className="flex pb5">{""}</div>
        
        </>
        }
      </Wrapper>
    );
  }
}

About.propTypes = {
  // bla: PropTypes.string,
};

About.defaultProps = {
  // bla: 'test',
};

export default About;

const Wrapper = ({ children }) => (
  <div className="AboutWrapper flex flex-column w-100 h-100 overflow-auto ">
    {children}
  </div>
);

const Headline = ({ text }) => (
  <div className="flex f2 fw3 black sans-serif ">
      { text }
  </div>
)

const Hero = ({ text }) => (
  <div
    id="hero"
    className="relative flex items-center justify-start w-100 bg-center bg-cover ph6 bg-white bb b--black-05 "
    style={{
      // marginTop: "10vh",
      // backgroundColor: '#c4ffef'
      height: "30vh",
      // background: 'url('+ this.state.data.image +')'
    }}
  >
    <h1 className="  f3 fw6 black ttu ">{text}</h1>
  </div>
);
const Section = (props) => (
  <section
    style={{
      // marginTop: "40vh",
      height: "auto",
      display: 'flow-root',
      columns: props.columns
    }}
    id="content"
    className="flex flex-column ph6 pt5"
  >
    {props.children}
  </section>
)
