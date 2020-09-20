const update_state_from_child = ({ self }) => {
    
    return new Promise( async resolve => {

        const { state } = self    
        
        resolve(self)

    })

}

export default update_state_from_child