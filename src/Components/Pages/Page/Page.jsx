import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../Util/Context/context.js'

// import { Content } from "../../Containers/___/index.js";
import { Loading } from '../../Elements'
import { Spinner } from '@blueprintjs/core'

import Content_ from '../../Containers/___/Content/Content_.jsx'
import Forms from '../../Containers/___/Forms/index.js'

//import { Test } from './Page.styles';

class Page extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      // id: props.match.params.id,
      slug: props.match.params.slug,
      page: null,
      data_: null,
      data: {
        headline: '',
        title: "",
        image: "",
      },
      ready: false
    };
  }

  componentWillMount = () => {




  }

  subscribe = (props) => {

    console.log('Subsribe : props ------> ', props)

    const waitForPageData = setInterval(() => {

      console.log('Page : props ------> ', this.props)

      const { slug } = this.props.match.params

      const { self, state } = this.context

      const { pages } = self.state

      console.log(' Pages to filter : ---> ', pages)

      const page = pages.filter(a => a.slug === slug)[0]

      console.log('Page : ----> ', page)

      // ready && console.log('Content : Data ===> ', page )





      if (page && page.content) {

        const form = page && page.data.form

        form && console.log('Forms ---> ', Forms)

        form && console.log('Forms : form ---> ', Forms[form])



        setTimeout(() => {

          this.setState({ page: page, ready: true, form: Forms[form] })

        }, 300)

        console.log('Page : state ----> ', this.state)

        clearInterval(waitForPageData)

      }

    }, 500)


  }


  componentDidMount = () => {

    console.log('Page mounted');

    this.subscribe(this.props)



  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Page will receive props', nextProps);

    if (nextProps.match.params.slug !== this.props.match.params.slug) {

      this.setState({
        // id: nextProps.match.params.slug,
        page: {},

        ready: false
      })

      this.subscribe(nextProps)

    }


  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Page will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Page did update');
  }

  componentWillUnmount = () => {
    console.log('Page will unmount');

    // this.setState({
    //   id: null,
    //   page: null,
    //   data_: null,
    //   data: {
    //     headline: null,
    //     title: null,
    //     image: null,
    //   },
    //   ready: false
    // })

  }

  render() {

    const { ready, page, form } = this.state
    const { data } = ready && page
    const { template } = ready && data
    const Form_ = form

    // ready && console.log('Content : Data ===> ', page )

    // const form = ready && page && page.data.form

    // form && console.log('Forms ---> ', Forms )

    // form && console.log('Forms : form ---> ' , Forms[form])

    // const {} = thi


    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return (
      <Wrapper page={page} template={null} self={this} Form={null} >

        {!this.state.ready && <Loading />}

        {this.state.ready &&
          <>
            <Hero text={this.state.page.title} />

            <Wrapper page={page} template={template} self={this} Form={Form_} >

              <Section columns={1}>
                <Headline text={this.state.page.headline} />
              </Section>

              <Section columns={ template === "sidebar" || template === "50-50" ? 2 : 3 }>
                <Content_

                  self={this}
                  entry={this.state.page.id}
                  page={this.state.page}
                  content={this.state.page.content}

                />
              </Section>


            </Wrapper>
          </>
        }
      </Wrapper>
    );
  }
}

Page.propTypes = {
  // bla: PropTypes.string,
};

Page.defaultProps = {
  // bla: 'test',
};

export default Page;

Page.contextType = AppContext




const Wrapper = ({ page, template, self, Form, children }) => (
  <div className=" flex flex-row ">
    <div className={template === "sidebar" ? " AboutWrapper flex flex-column w-100 h-100 overflow-auto w-60-ns w-100 " : template === "50-50" ? " AboutWrapper flex flex-column w-100 h-100 overflow-auto w-50-ns w-100" : " AboutWrapper flex flex-column w-100 h-100 overflow-auto "} >

      {children}



    </div>
    <>
      {
        template === "sidebar" || template === "50-50" && <Sidebar self={self} title={""} template={template} Form={Form} />
      }
    </>
  </div>
);


const Sidebar = ({ self, title, Form, template }) => (
  <section id="Sidebar" className={template === "50-50" ? " flex flex-column w-50-ns w-100 bl b--black-05 " : " flex flex-column w-40-ns w-100 bl b--black-05 "}>

    {
      title && <h1>{title}</h1>
    }

    <div className="flex pb5 w-100 ">

      <Form />

    </div>


  </section>

)

const Headline = ({ text }) => (
  <div className="flex f2 fw3 black sans-serif ">
    {text}
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
const Section = ({ children, columns }) => (
  <section
    style={{
      // marginTop: "40vh",
      height: "auto",
      display: 'flow-root',
      columns: columns
    }}
    id="content"
    className="flex flex-column ph6 pt5"
  >
    {children}
  </section>
)