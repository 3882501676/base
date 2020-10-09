import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Options.styles';

class Options extends PureComponent {

  constructor(props) {

    super(props)

    this.state = {

      hasError: false,

      options: [],

      ready: false

    }

  }


  componentDidMount = () => {
    console.log('Options mounted');

    let { year } = this.props

    let options = this.createOptions(year)

    this.setState({

      options: options,
      ready: true

    })

  }


  createOptions = (year) => {

    // let 

    // let { options } = this.state

    let options_length = 5
    // let options = []
    let years = []

    let year_mods = [
      -5, 10, 0, -3, 5, 1
    ]

    let options = []

    for (let mod of year_mods) {

      let y = (parseInt(year) + mod)

      let option = {
        year: y,
        correct: false,
        incorrect: false
      }

      options.push(option)

    }

    return options

  }

  render() {

    let { state, props } = this
    let { options, ready } = state
    let { year, self } = props
    // let { state } = self


    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div

        id="Options"

        style={{
          bottom: '12vh'
        }}

        className=" left-0 right-0 ph5 absolute flex flex-row flex-wrap items-center justify-center mt4  "

      >

        {ready && !self.state.quiz_response && options && options.map((option, index) => (

          <div

            onClick={() => {

              this.setState({ ready: false })

              let options_ = this.state.options

              let points = this.props.self.context.Data.state.points_a

              if (option.year === year) {

                option.correct = true

                option.incorrect = false

                points = points + 5

                this.props.self.context.layout.setState({

                  quiz_state: 'correct'

                })

              }

              if (option.year !== year) {

                option.correct = false

                option.incorrect = true

                points = points - 3

                this.props.self.context.layout.setState({

                  quiz_state: 'incorrect'

                })

              }

              options_[index] = option

              console.log('Context : option select ===: ', this.props)

              this.props.self.setState({

                quiz_response: true,
                quiz_success: option.year === year ? true : false
              
              })              

              this.props.self.context.Data.setState({
                
                points_a: points

              })

              this.setState({

                options: options_

              })

              setTimeout(() => {

                this.setState({
                  
                  ready: true

                })

              }, 10)

            }}

            className={
              (option.incorrect && " bg-red white ")
              + (option.correct && " bg-white green ")
              + (" grow pointer trans-b flex flex-column flex-wrap ph4 pv2 br2 f4 fw6 bg-white-05- hover-black black-60 ba-b--black-05 mr3 mb3 hover-bg-white-30 hover-bn ")}>

            {option.year}
            {option.correct}
          </div>
        ))}

      </div>
    );
  }
}

Options.propTypes = {
  // bla: PropTypes.string,
};

Options.defaultProps = {
  // bla: 'test',
};


export default Options