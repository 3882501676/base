import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core'
//import { Test } from './Header.styles';

import content from '../../content.js'

const Header = (props) => (
  <div

    id="Header"

    className="Header flex flex-column justify-center w-100 bg-transparent bb b--black-05 "

    style={{

      height: '10vh'

    }}


  >

    <div className="relative flex flex-row justify-between items-center w-100 ">

      <div className="flex flex-row justify-between items-center w-100 ph4 ">

        <span className=" f5 fw6 black dim ttu tracked w-100 tc ">

          {/* {content.header_text} */}
          {"Movie Trivia"}

        </span>

      </div>

      <div className="absolute right-0 flex flex-row justify-end items-center w-100 ph4">


        <Icon icon={'more'} iconSize={20} className="dim- pointer black-10 hover-black-40" />


      </div>


    </div>

    {props.children}


  </div>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
