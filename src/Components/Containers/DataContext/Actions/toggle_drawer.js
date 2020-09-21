const toggle_drawer = (props) => {
    
    return new Promise( async resolve => {

        let { self_, drawer } = props 

        console.log('toggle_drawer : props ---> ', props )
        console.log('toggle_drawer : state ---> ', self_.state )

        let { state } = self_    
        let { d, d1, d2, d3, d4 } = state

        if(drawer === 0){
            d1 = true
        }
        if(drawer === 1){
            d2 = true
        }
        if(drawer === 2){
            d3 = true
        }
        if(drawer === 3){
            d4 = true
        }

        d[drawer] = !d[drawer]

        console.log('d --> ',d)

        self_.setState({
            
            d,
            d1,
            d2,
            d3,
            d4

        })

        resolve('toggle_drawer : success')

    })

}

export default toggle_drawer