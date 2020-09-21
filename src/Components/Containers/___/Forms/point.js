import React, { PureComponent, createRef } from "react";

import { point } from "./Actions";
import { geolocate } from '../../../../Util/geo/index.js'

import create from "./Actions/point/create.js";

// const { create, update, delete_ } = point
const rows = [
    {
      label: "title",
      type: "text",
      default: "",
    },
    {
      label: "description",
      type: "text",
      default: "",
    },
    {
        label: "address",
        type: "text",
        default: "",
      },
    {
      label: "lat",
      type: "text",
      default: JSON.parse(localStorage.getItem('geolocate')) && JSON.parse(localStorage.getItem('geolocate')).lat,
    },
    {
      label: "lon",
      type: "text",
      default: JSON.parse(localStorage.getItem('geolocate')) && JSON.parse(localStorage.getItem('geolocate')).long,
    },

    {
      label: "urls",
      type: "textarea",
      default: "",
    },
  ];

//   let refs_
class Point extends React.PureComponent {
  
  constructor(props) {

    super(props);
    
    // let refs_ = rows.map(( row, index ) => this.assignRef({ row, index }) )
    
    this.state = {
        // refs: refs_
    };

    // this.assignRef = this.assignRef.bind(

    // let refs = []

    this.refs_ = []

    rows.map(( row, index ) => this.refs_[index] = React.createRef())

    this.something = React.createRef()

    // console.log('Point : refs ----> ', refs )
    // console.log('Point : this.refs ----> ', this.refs )
    // console.log('Point : this ----> ', this )
    // console.log('Point : refs_  ----> ', refs_ )

  }

  assignRef = (op) => {

    // let { row, index, refs } = op

    //     let label = row.label
        
    //     this[label] = React.createRef()

    //     console.log(this[label])

    //     // refs[index] = this.label

    //     return this[lab
    // el]
  }

  submit = async(e) => {

    e.preventDefault()

    // console.log(e)
    // console.log(this)
    // console.log(this.refs_)
    let values = this.refs_.map( ( ref, index ) => { 
        
        return {
        value: ref.current.value,
        label: rows[index].label
        }

    
    })

    console.log('Form values ---> ', values)

    await create({ values, self: this })

    .then( async res => {

        console.log('Create Point Res ---> ', res )
    })

  }

  componentDidMount = async() => {

    let geolocated = await geolocate()

    console.log('geo res ---> ', geolocated)

  }

  render() {
    

    const form = {
      id: "form-1",
      name: "create_point",
      description: "",
      rows: rows,
      submit_label: "submit",
      onsubmit: create,
    };

    return (
      <Wrapper form={form}>

        

        {rows.map((row, index) => (
          <Row row={row}>
            <Label row={row} />


            <Input 

            key={index}
            ref={ this.refs_[ index ] } 
            index={index}
            row={row}
            self={this}
            
             />
          </Row>
        ))}

        <Row>
          <Submit submit={this.submit} form={form} />
        </Row>
      </Wrapper>
    );
  }
}

export default Point;

const Wrapper = (props) => (
  <form   
  
  className=" flex flex-column pa4 " id={props.form.id}
  
  >
    {props.children}
  </form>
);

const Row = (props) => (
  <div className={" flex flex-column ph3 pv2 br1 bg-white bn f5 fw5 black"}>
    {props.children}
  </div>
);

const Label = (props) => (
  <div className={" flex flex-column"}>
    <label className={" flex f6 fw4 black-50 ttc mb2 "}>
      {props.row.label}
    </label>
  </div>
);

const Input = (props) => (
  <>
    <input
        ref={ props.self.refs_[props.index] }
        defaultValue={props.row.default}
        type={props.row.type}
        className={
        "  flex flex-column ph3 pv3 br1 bg-white f5 fw5 black ba b--black-05 "
      }
    />
  </>
);

const Submit = (props) => (
  <button
    // type={"submit"}
    onClick={ props.submit }

    className="  dim pointer bn flex f5 fw6 black- white bg-blue br1 ph3 pv3 tc items-center justify-center ttu tracked  "
  >
    {props.form.submit_label}
  </button>
);
