const one = ({ self }) => {
    
    return new Promise( async resolve => {

        resolve(self)

    })

}

export default one