import React from 'react';
import PropTypes from 'prop-types';

import { AppContext } from 'utils'
import { Options } from './Elements'
//import { Test } from './Quiz.styles';
// import {
//     getYearsRange
// } from '../../../../../../../../../../../React/CERW/html_save/Crew20 _ Film Crew Management Made Easier_files/0.chunk';

const Quiz = ({ self, slides, active }) => (
  <div

    id="Quiz"

    style={{

    }}

    className="Quiz flex relative flex-column w-100 h-100 items-center justify-start ">

    <ArrayMap self={self} slides={slides} active={active} />

  </div>
);

Quiz.propTypes = {
  // bla: PropTypes.string,
};

Quiz.defaultProps = {
  // bla: 'test',
};

export default Quiz;

Quiz.contextType = AppContext


const ArrayMap = ({ self, slides, active }) => (

  slides && slides.map((arrayitem, index) => (

    <Slide self={self} data={arrayitem} index={index} active={active} />

  )) || <></>

)

const Slide = ({ self, data, index, active }) => (

  <div

    style={{

      height: '100%',
      width: '100%'

    }}

    className={

      (index === active ? " fadeInUp  z-9" : " fadeOutUp z-01 ")

      + ("  top-0 left-0 absolute flex flex-column w-100 h-100 pv4 ph5 black ")} >


    <Poster poster={data.poster} />

    <MovieTitle title={data.name} />

    <QuizResponse self={ self } />  

    <Options self={self} year={parseInt(data.year)} />

    {/* <Year year={data.year} /> */}

  </div>

)

const QuizResponse = ({ self }) => (

  console.log('QuizResponse ; Main state: ===> ', self.state ),

    self.state.quiz_response && 

    <div className=" flex flex-column items-center justify-center pv4 f4 fw5 black w-100 ">
     
     <span 
        className={ 
       ( self.state.quiz_success ? " pulse " : " shake " ) 
     + ( " ba ph5 pv3 bg--green-highlight  ph3 pv2 br2 bg--blue white fw6 round bw2  " ) } >
     
      { self.state.quiz_success ? "Correct" : "Incorrect" }
     
     </span>
     
     <span className="f5 fw5 white tc pv3" >{"You've earned"} <span className=" fw6 f3 ">{ self.state.quiz_success ? " 5 " : " -3 " }</span >{"points"}</span>
    
    </div>

    || <></>

)

const Year = ({ year }) => (
  <div

    style={{
      height: '10vh'
    }}

    className=" absolute bottom-0 left-0 right-0 w-100 z-9 flex items-center justify-center bt b--black-05  bg--green " >
    <span className=" f2 fw6 black- white ">

      {year}
    </span>
  </div>
)

const MovieTitle = ({ title }) => (
  <div

    style={{
      fontSize: '1.7rem',
      top: '-5vh'
    }}

    className="relative flex tc fw6 black -white items-center justify-center w-100 "

  >
    {title}
  </div>
)

const Poster = ({ poster }) => (
  <div className=" flex flex-column items-center justify-center w-100 pb5 pt4">
    <div

      style={{

        backgroundImage: 'url("' + poster + '")',
        width: '100px',
        height: '100px'

      }}

      className="grow br3 bg-cover bg-center no-repeat bs-b"

    >

    </div>
  </div>
)





// const Options = ({ year }) => {

//   // let 

//   const createOptions = (year) => {

//     let options_length = 5
//     let options = []
//     let years = []
//     let year_mods = [
//       -5, 10, 0, -3, 5, 1
//     ]

//     for (let mod of year_mods) {

//       let y = ( parseInt(year) + mod )

//       let option = {
//         year: y,
//         correct: false,
//         incorrect: false
//       }

//       options.push(option)

//     }

//     // options.push(parseInt(year))

//     return options

//   }

//   let options = createOptions(year)


//   return (
//     <div

//       id="Options"

//       style={{
//         bottom: '12vh'
//       }}

//       className=" left-0 right-0 ph5 absolute flex flex-row flex-wrap items-center justify-center mt4  "

//     >

//       {options.map((option, index) => (
//         <div 
        
//         onClick={ () => {

// // alert(JSON.stringify(option))
// // alert( option.year + ", " + year)

//           if( option.year === year ) {

//             options[index].correct = true
            
//             options[index].incorrect = false
            

//           }

//           if( option.year !== year ) {

//             options[index].correct = false

//             options[index].incorrect = true

//           }



//           // else {

//           //   options[index].incorrect = true
          
//           // }

//           console.log('Options', options )

//         }}
        
//         className={ 
//             ( options[index].incorrect  && " bg-red white "  )
//           + ( options[index].correct  && " bg-white green "  ) 
//           + ( " grow pointer trans-b flex flex-column flex-wrap ph4 pv2 br2 f4 fw6 bg-white-05- hover-black black-60 ba-b--black-05 mr3 mb3 hover-bg-white-30 hover-bn " ) }>{options[index].year}</div>
//       ))}

//     </div>
//   )

// }