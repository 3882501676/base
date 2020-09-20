const set_active_nav = ({ self, active }) => {
    
    return new Promise( async resolve => {

        const { state } = self    

        self.setState({
            active_menu: active
        })

        resolve('set_actie_nav : success')

    })

}

export default set_active_nav