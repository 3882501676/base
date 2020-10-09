import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core'
//import { Test } from './Footer.styles';

import content from '../../content.js'

const Footer = (props) => (
  <div

    id="Footer"

    className="Footer flex flex-column justify-center w-100 bg-white z-9 bt b--black-05 "

    style={{

      height: '10vh'

    }}


  >

    <div className="flex flex-row justify-between items-center w-100 ">

      <div className="flex flex-row justify-between items-center w-100 ph4 ">

        <span className=" f5 fw6 black ">

          {content.footer_text}

        </span>

      </div>

      <div className="flex flex-row justify-end items-center w-100 ph4 pointer ">


        <Icon icon={'menu'} iconSize={20} className="dim- trans-b black-20 hover-black" />


      </div>


    </div>

    {props.children}


  </div>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
