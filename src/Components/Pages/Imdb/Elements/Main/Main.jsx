import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core'
//import { Test } from './Main.styles';

import { AppContext } from 'utils'

import { Welcome, Quiz, Score, Scores, Share, Controls, Loading } from './Elements'
// import {
//     formatTranslationMessages
// } from '../../../../../../../../Formation/VirtaQ/react-boilerplate/internals/templates/i18n';


let isMobile = true

class Main extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {

      active: 0,

      hasError: false,

      quiz_response: false,

      quiz_success: false  

    };
  }

  componentWillMount = () => {
    console.log('Main will mount');
  }

  componentDidMount = () => {
    console.log('Main mounted');
  
    let { context } = this
    let { movies } = context

    this.setState({

      slides: movies,
      ready: true

    })


  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Main will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {

    console.log('Main will update', nextProps, nextState);

    if( this.context.active !== nextState.active ) {

      this.props.self.setState({

        quiz_response: true,
        quiz_success: false
     
      })

    }

  }

  componentDidUpdate = () => {
    console.log('Main did update');
  }

  componentWillUnmount = () => {
    console.log('Main will unmount');
  }

  render () {

    let { state, context } = this
    let { slides, ready, quiz_response, quiz_success } = state
    let { active, player_scores } = context


    
    console.log('Main Context ===> ', context )

    console.log('context : control ===> ', context.control)

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div 
      
      id="Main"

      className="MainWrapper trans-a flex flex-column relative w-100  z-9"
      
      style={

        isMobile 
        
        ?

        {
          height: '80vh',
          transform: player_scores ? 'translate3d(0,80vh,0)' : 'translate3d(0,00vh,0)'
        } 
        
        : 
        
        {
          height: '80vh',
          transform: player_scores ? 'translate3d(0,80vh,0)' : 'translate3d(0,00vh,0)'
        } 
      
            }  
      
      >


          { !ready && <Loading /> }

          { ready && 
          
                <>

                      <Welcome />

                      <Quiz self={this} active={ active } slides={ slides } />

                      <Score />

                      <Share />

                      <Controls self={this} />
                
                </>
          
          }


      </div>
    );
  }
}

Main.propTypes = {
  // bla: PropTypes.string,
};

Main.defaultProps = {
  // bla: 'test',
};

export default Main;
Main.contextType = AppContext

