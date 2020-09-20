import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Map.styles';
import AppContext from '../../../../Util/Context/context.js'

import { Mapp } from './Elements/Map/index.js'
import { Icon } from '@blueprintjs/core'

class Map extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Map will mount');
  }

  componentDidMount = () => {
    console.log('Map mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Map will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Map will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Map did update');
  }

  componentWillUnmount = () => {
    console.log('Map will unmount');
  }

  render () {

    const { index, self } = this.props 
    const { state } = self 
    const { active } = state 


    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div 
      
      style={{
      
        position: 'fixed',
        top: '10vh',
        left: 0,
        width: '100vw',
        height: '90vh'
      
      }}

      className={ 
        ( active === index ? " o-1 " : " o-0 " ) 
      + ( " bg-blue relative " ) }
      
      >

        <Mapp />
        
        <AddMapItem self={this} />

        <Toolbar self={this} />

      </div>
    );
  }
}

Map.propTypes = {
  // bla: PropTypes.string,
};

Map.defaultProps = {
  // bla: 'test',
};

export default Map;

Map.contextType = AppContext

const AddMapItem = ({ self }) => (
  <div 
  style={{
    position: 'absolute',
    top: 0,
    left: 0
  }}
  className=" pa3 flex ">

    <div 

    onClick={ () => {

        alert()

    }}

    className="flex bg-white br2 pa3 shadow-1">


        <Icon 
        
        style={{
          fill: '#bdbdbd'
        }}
        icon={'plus'} 
        iconSize={20} 

        />

    </div>



  </div>
)

const items = [
  {
    label: 'Add Map Item',
    icon: 'plus',
  },

]
const Toolbar = ({ self }) => (
  <div>




  </div>
)