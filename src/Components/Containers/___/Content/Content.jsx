import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Content.styles';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import RichText from '@madebyconnor/rich-text-to-jsx'

const contentful = require("contentful");
// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: "rjamtt70s7tx",
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: "huCscS5fIHtLPtgWsQhx_051Gq3U3gZr_C0NM-sFZwc"
// });
// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// window.client = client

class Content extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      content: {},
      ready: false
    };
  }

  componentWillMount = () => {
    console.log('Content will mount');

    
  }

  componentDidMount = async() => {
    console.log('Content mounted');



    const { self, entry, page } = this.props
    

    const client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "rjamtt70s7tx",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "huCscS5fIHtLPtgWsQhx_051Gq3U3gZr_C0NM-sFZwc"
    });
    // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
    window.client = client

    
    await client

  .getEntry('6nMQtfOdPYtRLGwwsFDyGz')

  .then(entry_ => { 

    // let assets = entry_.getAssets()

    console.log(entry_)
  
    this.setState({
      // assets: assets,
      ready: true,
      content: entry_.fields.content
    })

    self.setState({
      data: { title: entry_.fields.title, image: entry_.fields.media[0].fields.file.url }
    })

  }
  )
  .catch(err => console.log(err));



  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Content will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Content will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Content did update');
  }

  componentWillUnmount = () => {
    console.log('Content will unmount');
  }

  render () {
    const { ready, content } = this.state
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    let options = {
      renderNode: {
        'embedded-asset-block': (node) => (
          <img class="img-fluid mw7 left" src={ node.data.target.fields.file.url} />
        )
      }
    }
    const optionsq = {
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
          const { title, description } = node.data.target.fields;
          return <CustomComponent1 title={title} description={description} />
        },
        [BLOCKS.EMBEDDED_ASSET_BLOCK]: (node) => {
          const { title, description, file } = node.data.target.fields;
          return <CustomComponent file={file} title={title} description={description} />
        }
      }
    };

    return (

      ready && documentToReactComponents(content, options)
  
    )
  }
}

Content.propTypes = {
  // bla: PropTypes.string,
};

Content.defaultProps = {
  // bla: 'test',
};

export default Content;

const CustomComponent = ({ file, title, description }) => (
  <> <img src={file.url} />
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  </>
);

const CustomComponent1 = ({ title, description, file }) => (
  <> <img src={file.url} />
   <div>
     <h2>{title}</h2>
     <p>{description}</p>
   </div>
   </>
 );
