import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core'
//import { Test } from './Header.styles';

import content from '../../content.js'

const Header = ({ scores_state, layout, children }) => (
  <div

    id="Header"

    className="Header flex flex-column justify-center w-100 bg-transparent bb b--black-05 "

    style={{

      height: '10vh'

    }}


  >

    <div className="relative flex flex-row justify-between col-2- items-center w-100 h-100 ">

      <div className="flex flex-row justify-between items-center w-100 h-100 ">

        <span className="ph4 flex f3 fw6 black dim ttu tracked  tl justify-start items-center h-100 br b--black-05">

          {scores_state.points_a}

        </span>

        <span className=" flex f6 fw5 black-50 dim ttu tracked w-100 tc  justify-start items-center h-100 ph3 ">

          {/* {content.header_text} */}
          {"Player 1"}

        </span>



      </div>

      <div

        onClick={() => {

          // console.log('Header : Props.self.context', props.layout )

          layout.setState({

            player_scores: !layout.state.player_scores

          })

        }}

        className=" dim grow pointer flex items-center justify-center h-100">

        <Icon icon={'ring'} iconSize={20} className="hover-white black-70" />

      </div>

      <div className="flex flex-row justify-between items-center w-100  h-100 ">


        <span className=" flex f6 fw5 black-50 dim ttu tracked w-100 tc  justify-end items-center ph3 ">

          {/* {content.header_text} */}
          {"Player 2"}


        </span>

        <span className="ph4 flex f3 fw6 black dim ttu tracked  tr justify-end items-center h-100 bl b--black-05 h-100">

          {scores_state.points_b}

        </span>

      </div>

    </div>

    {children}


  </div>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
