import React from 'react'

import { point } from './Actions'

import create from './Actions/point/create.js'

// const { create, update, delete_ } = point

const Point = () => {

    
    const rows = [
        {
            label: 'title',
            type: 'text',
            default: ''
        },
        {
            label: 'description',
            type: 'text',
            default: ''
        },
        {
            label: 'lat',
            type: 'text',
            default: ''
        },
        {
            label: 'lon',
            type: 'text',
            default: ''
        },
        {
            label: 'lat',
            type: 'text',
            default: ''
        },
        {
            label: 'urls',
            type: 'textarea',
            default: ''
        }

    ]

    const form = {
        
        id: 'form-1',
        name: 'create_point',
        description: '',
        rows: rows,
        submit_label: 'submit',
        onsubmit: create

    }

console.log('create', create)    

        return (

            <Wrapper form={form} >

                {
                    rows.map((row, index) => (
                        <Row row={row} >
                            <Label row={row} />
                            <Input row={row} />
                        </Row>
                    ))
                }

                <Row  >
                    <Submit form={form} />
                </Row>
            </Wrapper>

        )
    
}

export default Point


const Wrapper = (props) => (
    <form 
    
    // onSubmit={ create }

    className=" flex flex-column pa4 "

    id={props.form.id}>
        {props.children}
    </form>
)

const Row = (props) => (
    <div 
    
    className={" flex flex-column ph3 pv2 br1 bg-white bn f5 fw5 black"}
    
    >
        {props.children}
    </div>
)

const Label = (props) => (
    <div 
    className={" flex flex-column"}
    >
        <label
        className={" flex f6 fw4 black-50 ttc mb2 "}
        >{props.row.label}</label>
    </div>
)

const Input = (props) => (
    <>
        <input 
        
        defaultValue={props.row.default}
        type={props.row.type}
        className={"  flex flex-column ph3 pv3 br1 bg-white f5 fw5 black ba b--black-05 "}

        ></input>
    </>
)

const Submit = (props) => (
    <button 
    
    // type={"submit"} 

onClick={ create }    
    
    className="  dim pointer bn flex f5 fw6 black- white bg-blue br1 ph3 pv3 tc items-center justify-center ttu tracked  "
    
    >
        {props.form.submit_label}
    </button>
)
