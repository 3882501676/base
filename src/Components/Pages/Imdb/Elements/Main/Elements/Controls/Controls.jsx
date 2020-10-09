
import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@blueprintjs/core'
//import { Test } from './Control.styles';

const Controls = ({ self }) => (
  <div className="ControlWrapper absolute w-100 bottom-0 z-99 ">
    <div


      onClick={() => {

        console.log('Controls : context ==>', self.context)

        let active = self.context.control.state.active === 0 ? self.context.control.state.active : self.context.control.state.active - 1

        self.context.control.setState({ active: active })

        self.context.layout.setState({ quiz_state: 'normal' })

      }}

      style={{
        height: '10vh',
        width: '10vh'
      }}

      className="flex items-center justify-center absolute left-0 bottom-0  br bt b--black-05 pointer hover-bg-near-white"

    >

      <Icon icon={'arrow-left'} iconSize={20} className=" black-50 hover-black " />

    </div>


    <div

      onClick={() => {

        // console.log('Controls : context ==>', self.context)

        let active = self.context.control.state.active < self.context.movies.length ? self.context.control.state.active + 1 : self.context.control.state.active

        self.context.control.setState({ active: active })

        self.context.layout.setState({ quiz_state: 'normal' })

      }}
      style={{
        height: '10vh',
        width: '10vh'
      }}

      className="flex items-center justify-center absolute right-0 bottom-0  bl bt b--black-05 pointer hover-bg-near-white"

    >

      <Icon icon={'arrow-right'} iconSize={20} className=" black-50 hover-black " />

    </div>

  </div>
);

Controls.propTypes = {
  // bla: PropTypes.string,
};

Controls.defaultProps = {
  // bla: 'test',
};

export default Controls;
