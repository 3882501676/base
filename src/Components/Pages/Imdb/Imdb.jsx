import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Imdb.styles';

import { Auth, Data, Layout, Control } from './Containers/index.js'
import { Header, Footer, Scores, Main } from './Elements'
import { AppContext } from 'utils'
import './Assets/css/index.css'

// const { Loading } = UIExtras


class Imdb extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Imdb will mount');
  }

  componentDidMount = () => {
    console.log('Imdb mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Imdb will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Imdb will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Imdb did update');
  }

  componentWillUnmount = () => {
    console.log('Imdb will unmount');
  }

  render() {

    const { context } = this
    const { theme, player_scores } = context

    console.log('Imdb theme context', this.context)

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Auth>

        <Data>

          <Layout>

            <Control>


              <AppContext.Consumer>

                {(props) => (

                  console.log('AppContext.Consumer props ===> ', props),


                  <Wrapper quiz_state={props.layout.state.quiz_state} theme={props.theme} >


                    <Header scores_state={props.Data.state} layout={props.layout} />

                    <Main self={this} />

                    <Scores active={ props.player_scores } />

                    <Footer self={this} />


                  </Wrapper>


                )}

              </AppContext.Consumer>
            </Control>

          </Layout>

        </Data>

      </Auth>
    )
  }
}

Imdb.propTypes = {
  // bla: PropTypes.string,
};

Imdb.defaultProps = {
  // bla: 'test',
};

export default Imdb;
Imdb.contextType = AppContext

const Wrapper = ({ children, quiz_state }) => (
  <section

    id="Wrapper"

    className={
      ( quiz_state === "normal" ? " bg-white " : quiz_state === "correct" ? " bg-green-highlight " : quiz_state === "incorrect" ? " bg-red " : " bg-light-green " )
      // (' bg-' + theme)

      + ("  trans-a flex flex-column items-center justify-center mw6 center br3 overflow-hidden mv5 bs-b ")}

    style={{



    }}

  >
    {children}
  </section>
)