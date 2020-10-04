import React, { PureComponent, createRef } from "react";

import { point } from "./Actions";
import { geolocate } from '../../../../Util/geo/index.js'

import create from "./Actions/point/create.js";

import { Filepond, Locationsearch } from './Elements'
import { Spinner, Icon } from '@blueprintjs/core'
// import 

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
      hidden: true,
      // default: JSON.parse(localStorage.getItem('geolocate')) && JSON.parse(localStorage.getItem('geolocate')).lat,
    },
    {
      label: "lon",
      type: "text",
      hidden: true,
      // default: JSON.parse(localStorage.getItem('geolocate')) && JSON.parse(localStorage.getItem('geolocate')).long,
    },

    {
      label: "urls",
      type: "textarea",
      hidden: true,
      default: "",
    },
  ];

  const jsonbin_apikey = "$2b$10$7U4kzK0c1rO08J4A3jH1ZudyhWZDOBoNjSGTf0lFBBPthRgWahoTK"

//   let refs_
class Point extends React.PureComponent {
  
  constructor(props) {

    super(props);
    
    // let refs_ = rows.map(( row, index ) => this.assignRef({ row, index }) )
    
    this.state = {
        // refs: refs_
        formbusy: false,
        geo: { lat: 0, long: 0 },
        lat: 0,
        long: 0,
        file: null
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

  onFile = async( op ) => {

    console.log('onFile ===> ', op )
    
    let fileItems = op

    let files = fileItems.map(fileItem => fileItem.file)
    console.log('Files ', files )

    fileItems.map( async fileItem => {

      

      let file = 'data:image/jpeg;base64,' + fileItem.getFileEncodeBase64String()

      console.log(' File ==+> ', file )

      const config = {

        method: 'POST',        
        headers: {
          "Content-Type": "application/json",
          "secret-key": jsonbin_apikey,
          private: false
        },

        body: JSON.stringify({ file: file })

      }

      let url = "https://api.jsonbin.io/b/"

      await fetch( url, config )

      .then( res => {

        return res.json()

      })

      .then( async res => {

          console.log('JSON upload res ===> ', res )

          this.setState({

            file: "https://api.jsonbin.io/b/" + res.id
          
          })


      })


      



      // let file_ = fileItem.getFileEncodeDataURL()

      // console.log('File ===> ', 'data:image/jpeg;base64,' + file )
      // console.log('File_ ===> ', file_ )

    })


    // this.setState({

    //   files: fileItems.map(fileItem => fileItem.file)
    
    // })
    

    // const {  } = op



  }

  submit = async(e) => {

    e.preventDefault()

    // console.log(e)
    // console.log(this)
    // console.log(this.refs_)

    this.setState({
      formbusy: true
    })

    let values = this.refs_.map( ( ref, index ) => { 
        
        return {
        value: ref.current.value,
        label: rows[index].label
        }

    
    })

    values.map( ( value, index ) => {

      if(value.label === 'lon') { 
        value.value = JSON.stringify(this.state.long)
      }
      if(value.label === 'lat') { 
        value.value = JSON.stringify(this.state.lat)
      }
    
    })

    console.log('Form values ---> ', values)

    let i = values.findIndex( a => a.label === "urls" )
    values[i].value = this.state.file

    await create({ values, self: this })

    .then( async res => {

        console.log('Create Point Res ---> ', res )
        
        this.setState({
          formbusy: false
        })

    })

  }

  componentDidMount = async() => {

    let geolocated = await geolocate()

    console.log('geo res ---> ', geolocated)

  }

  render() {

    // let a = rows.map( row => if( row.label === 'lat' ){ row.default = this.state.geo.lat } )
    // let b = rows.map( row => if( row.label === 'long' ) {  row.default = this.state.geo.long })

    // rows.map((row,index) => {
    //     if(row.label === 'lat'){
    //       row.default = this.state.geo.lat
    //     }
    //     if(row.label === 'long'){
    //       row.default = this.state.geo.long
    //     }
    // })

    // const rows = [
    //   {
    //     label: "title",
    //     type: "text",
    //     default: "",
    //   },
    //   {
    //     label: "description",
    //     type: "text",
    //     default: "",
    //   },
    //   {
    //       label: "address",
    //       type: "text",
    //       default: "",
    //     },
    //   {
    //     label: "lat",
    //     type: "text",
    //     default: this.state.geo.lat
    //     // default: JSON.parse(localStorage.getItem('geolocate')) && JSON.parse(localStorage.getItem('geolocate')).lat,
    //   },
    //   {
    //     label: "lon",
    //     type: "text",
    //     default: this.state.geo.long
    //     // default: JSON.parse(localStorage.getItem('geolocate')) && JSON.parse(localStorage.getItem('geolocate')).long,
    //   },
  
    //   {
    //     label: "urls",
    //     type: "textarea",
    //     default: "",
    //   },
    // ];

    
    const form = {
      id: "form-1",
      name: "create_point",
      description: "",
      rows: rows,
      submit_label: "submit",
      onsubmit: create,
    };
    
    return (
      <>
      <Filepond self={this} onFile={ this.onFile } />
      <Wrapper form={form}>

        
        <div className=" flex flex-column ph3 pv2 br1 bg-white bn f5 fw5 black" >

        <div className=" flex flex-column"><label className=" flex f6 fw4 black-50 ttc mb2 ">Point Address</label></div>

        <Locationsearch self={this} />

        </div>

        {rows.map((row, index) => (
           <Row row={row}>

            <Label row={row} />


            <Input 

            key={index}
            ref={ this.refs_[ index ] } 
            index={index}
            row={row}
            self={this}
            lat={this.state.lat}
            long={this.state.long}
          
            
             />

          </Row>
        ))}


        <Row>

        
        
          <Submit submit={this.submit} form={form} self={this} />
        
        </Row>

      </Wrapper>
      </>
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
  <div className={ ( props.row && props.row.hidden ? " dn " : "  " ) + ( " flex flex-column ph3 pv2 br1 bg-white bn f5 fw5 black" ) } >
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

const Input = ({ row, self, index, lat, long }) => (
  <>
    <input
        ref={ self.refs_[index] }
        defaultValue={ row.label === "lat" ? lat : row.label === 'lon' ? long : row.default}
        type={row.type}
        className={
        "  flex flex-column ph3 pv3 br1 bg-white f5 fw5 black ba b--black-05 "
      }
    />
  </>
);

const Submit = ({ submit, form, self }) => (
  <button
    // type={"submit"}
    onClick={ submit }

    className="  dim pointer bn flex f5 fw6 black- white bg-blue br1 ph3 pv3 tc items-center justify-center ttu tracked  "
  >
    { !self.state.formbusy && form.submit_label}
    { self.state.formbusy && <Spinner size={30} value={null} /> }
  </button>
);
