import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AppContext from '../../../../Util/Context/context.js'
const contentful = require("contentful");

class Pages extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      content: {},
      ready: false,
    };
  }

  componentWillMount = () => {
    console.log("Content will mount");
  };

  reduce = (entry) => {

    let { sys, fields } = entry

    let id = sys.id
    let createdAt = sys.createdAt
    let updatedAt = sys.updatedAt
    let slug = fields.title.toLowerCase()

    return { id, createdAt, updatedAt, slug, ...fields }
    
  }
  componentDidMount = async () => {
    
    console.log("Content mounted");

    // const { self, entry, page } = this.props;

    let { self } = this.context

    const client = contentful.createClient({
      space: "rjamtt70s7tx",
      accessToken: "huCscS5fIHtLPtgWsQhx_051Gq3U3gZr_C0NM-sFZwc",
    });

    await client

      .getEntries({
        content_type: 'page'
      })

      .then((entries) => {

        // console.log('Contentful : Pages : Raw Entries ---> ', entries )
        // console.log('Contentful : Pages ---> ', entries.items.map( a => a.fields ) );

        let pages = entries.items.map( a => this.reduce(a) )

        console.log('Contentful : Pages : Reduced Entries ---> ', pages )

        self.setState({
          
          pages: pages

        })

      })
      .catch((err) => console.log(err));
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

    return (<></>)

  }
  
}

// Content.propTypes = {
//   // bla: PropTypes.string,
// };

// Content.defaultProps = {
//   // bla: 'test',
// };

export default Pages

Pages.contextType = AppContext