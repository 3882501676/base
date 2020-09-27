import React, { PureComponent, createRef } from "react";
// 
// import { point } from "./Actions";
import { geolocate, reversegeocode } from 'utils/geo'
import AppContext from '../../../../Util/Context/context.js'

import { point } from "./Actions";

import { Locationsearch } from './Elements'
import { Spinner, Icon } from '@blueprintjs/core'

const { create } = point

// const { create, update, delete_ } = point
const rows = [
  {
    label: "name",
    type: "text",
    default: "",
  },
  {
    label: "subject",
    type: "text",
    default: "I have a question about ... ",
  },
  {
    label: "city",
    type: "text",
    default: "",
  },

  {
    label: "message",
    type: "textarea",
    default: "",
  },
];

//   let refs_
class Contact extends React.PureComponent {

  constructor(props) {

    super(props);

    // let refs_ = rows.map(( row, index ) => this.assignRef({ row, index }) )

    this.state = {
      // refs: refs_
      formbusy: false,
      geo: { lat: 0, long: 0 },
      lat: 0,
      long: 0,
      address: '',
      name: ''
    };

    // this.assignRef = this.assignRef.bind(

    // let refs = []

    this.refs_ = []

    rows.map((row, index) => this.refs_[index] = React.createRef())

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

  submit = async (e) => {

    e.preventDefault()

    // console.log(e)
    // console.log(this)
    // console.log(this.refs_)

    this.setState({
      formbusy: true
    })

    let values = this.refs_.map((ref, index) => {

      return {
        value: ref.current.value,
        label: rows[index].label
      }


    })

    values.map((value, index) => {

      if (value.label === 'lon') {
        value.value = JSON.stringify(this.state.long)
      }
      if (value.label === 'lat') {
        value.value = JSON.stringify(this.state.lat)
      }
      if (value.label === 'city') {

      }

    })

    console.log('Form values ---> ', values)


    // this.context.self.setState({
    //   notification: true,
    //   notification_data: {
    //     title: 'Message Sent',
    //     content: 'Your message has been sent'
    //   }
    // })

    // setTimeout( () => {

    //   this.context.self.setState({
    //     notification: false
    //   })

    // }, 3000 )


    await create({ values, self: this })

      .then(async res => {

        console.log('Create Point Res ---> ', res)

        this.setState({
          formbusy: false
        })

        this.context.self.setState({
          notification: true,
          notification_data: {
            title: 'Message Sent',
            content: 'Your message has been sent'
          }
        })

        setTimeout( () => {

          this.context.self.setState({
            notification: false
          })

        }, 3000 )

      })

  }

  componentDidMount = async () => {

    // let geolocated = await geolocate()

    // console.log('geo res ---> ', geolocated)

    let g_user = JSON.parse(localStorage.getItem('g_user'))
    const { _profile } = g_user
    const { name } = _profile

    this.setState({
      name: name
    })

    await geolocate().then(async geo => {

      console.log('Geo : geo ---> ', geo )

      await reversegeocode({ lat: geo.lat, lon: geo.long }).then(async address => {

        console.log('Address ---> ', address)

        this.setState({

          address: address

        })

      })

    })

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
      location_search: false,
      onsubmit: create,
      title: 'Contact Us',
      description: 'Fill in your details below to leave us a message'
    };



    return (

      <div className="flex flex-column w-100 ">

        <div className=" flex flex-column ph5-ns ph6 pt5 w-100 ">
          <h3 className="  flex f4 fw6 black ttc mb4 ph3  ">{form.title}</h3>
          <h4 className="  flex f3 fw1 black-40 ttc mb3 ph3   ">{form.description}</h4>
        </div>

        <Wrapper form={form}>



          {
            form.location_search &&
            <div className=" flex flex-column ph3 pv2 br1 bg-white bn f5 fw5 black" >

              <div className=" flex flex-column"><label className=" flex f6 fw4 black-50 ttc mb2 ">Point Address</label></div>

              <Locationsearch self={this} />

            </div>
          }


          {rows.map((row, index) => (
            <Row row={row} self={this}>

              <Label row={row} />


              <Input

                key={index}
                ref={this.refs_[index]}
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
      </div>
    );
  }
}

export default Contact;

Contact.contextType = AppContext

const Wrapper = (props) => (
  <form

    className=" flex flex-column ph5 pv4 w-100" id={props.form.id}

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

const Input = ({ row, self, index, lat, long }) => (
  <>
    {row.type === "text" && <input
      ref={self.refs_[index]}
      defaultValue={row.label === "lat" ? lat : row.label === 'lon' ? long : row.label === "city" ? self.state.address.State : row.label === "name" ? self.state.name : row.default}
      type={row.type}
      className={
        "  flex flex-column ph3 pv3 br1 bg-white f5 fw5 black ba b--black-05 "
      }
    />
    }
    {
      row.type === "textarea" && <textarea
        ref={self.refs_[index]}
        defaultValue={row.label === "lat" ? lat : row.label === 'lon' ? long : row.label === "city" ? self.state.address.State : row.default}
        type={row.type}
        rows={4}
        className={
          "  flex flex-column ph3 pv3 br1 bg-white f5 fw5 black ba b--black-05 "
        }
      />
    }
    {
      row.type === "select" && <select
        ref={self.refs_[index]}
        defaultValue={row.label === "lat" ? lat : row.label === 'lon' ? long : row.label === "city" ? self.state.address.State : row.default}
        type={row.type}
        rows={4}
        className={
          "  flex flex-column ph3 pv3 br1 bg-white f5 fw5 black ba b--black-05 "
        }
      >

        {
          row.options.map((option, index) => (
            <option value={option.value} >{option.label}</option>
          ))
        }

      </select>
    }
  </>
);

const Submit = ({ submit, form, self }) => (
  <button
    // type={"submit"}
    onClick={submit}

    className="  dim pointer bn flex f5 fw6 black- white bg-blue br1 ph3 pv3 tc items-center justify-center ttu tracked  "
  >
    {!self.state.formbusy && form.submit_label}
    {self.state.formbusy && <Spinner size={30} value={null} />}
  </button>
);
