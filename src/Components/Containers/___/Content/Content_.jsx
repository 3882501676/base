import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Content.styles';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import RichText from '@madebyconnor/rich-text-to-jsx'

class Content_ extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      content: this.props.content,
      ready: true
    };
  }

  componentWillMount = () => {
    console.log("Content will mount");
  };

  componentDidMount = async () => {
    
    console.log("Content mounted");

    const { self, entry } = this.props;

  };

  componentWillReceiveProps = (nextProps) => {
    console.log("Content will receive props", nextProps);
  };

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Content will update", nextProps, nextState);
  };

  componentDidUpdate = () => {
    console.log("Content did update");
  };

  componentWillUnmount = () => {
    console.log("Content will unmount");
  };

  render() {
    const { ready, content } = this.state;
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    let options = {
      renderNode: {
        "embedded-asset-block": (node) => (
          <img
            class="img-fluid mw7 left"
            src={node.data.target.fields.file.url}
          />
        ),
      },
    };
    const optionsq = {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
          const { title, description } = node.data.target.fields;
          return <CustomComponent1 title={title} description={description} />;
        },
        [BLOCKS.EMBEDDED_ASSET_BLOCK]: (node) => {
          const { title, description, file } = node.data.target.fields;
          return (
            <CustomComponent
              file={file}
              title={title}
              description={description}
            />
          );
        },
      },
    };

    return ready && documentToReactComponents(content, options);
  }
}

// Content.propTypes = {
//   // bla: PropTypes.string,
// };

// Content.defaultProps = {
//   // bla: 'test',
// };

export default Content_;

const CustomComponent = ({ file, title, description }) => (
  <>
    {" "}
    <img src={file.url} />
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </>
);

const CustomComponent1 = ({ title, description, file }) => (
  <>
    {" "}
    <img src={file.url} />
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </>
);
