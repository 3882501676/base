
import React from 'react'

import Forms from '../../../Forms/index.js'

console.log(' Forms ---> ', Forms )

// import { point } from './Actions'

// const { create, update, delete } = point

const a = ({ props }) => {

    return (
      <>
        <div className="  flex flex-column ph5 pt5 f4 fw6 black    ">{"Add a Point"}</div>


        <Forms.Point />


        <div

          onClick={() => {
            props.self.setState({
              d2: !props.self.state.d2
            })
          }}

          className=" flex flex-column pa5 f4 fw6 black  ">{"Open"}</div>

      </>
    )
  

}

export default a