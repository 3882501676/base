import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Score.styles';

const isMobile = true

const Scores = ({ active }) => (
  <div

    style={

      isMobile

        ?

        {
          height: '80vh',
          transform: active ? 'translate3d(0,-80vh,0)' : 'translate3d(0,00vh,0)'
        }

        :

        {
          height: '80vh',
          transform: active ? 'translate3d(0,-80vh,0)' : 'translate3d(0,00vh,0)'
        }

    }

    className={ 
      
      ( active ? " o-1 z-9 " : " o-0 z-01 " ) 
    
    + ( " absolute flex w-100 h-100 black items-center justify-center h-100 " ) } >
    <div className="flex flex-row col-2 justify-between h-100">

      <div className="flex flex-column pa4 br b--black bw1 ">

        {"Scores"}


      </div>

      <div className="flex flex-column pa4">

        {"Scores"}

      </div>

    </div>
  </div>
);

Scores.propTypes = {
  // bla: PropTypes.string,
};

Scores.defaultProps = {
  // bla: 'test',
};

export default Scores;