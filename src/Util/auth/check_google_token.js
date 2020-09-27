const check_google_token = async(token) => {

    return new Promise( async resolve => {

        const url = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=" + token
        
        await fetch(url)
        
        .then( async res => {
            
            if(res.error){
                resolve(false)
            }
            
            else {
                resolve(true)
            }
            
        })
        
    })

}

export default check_google_token