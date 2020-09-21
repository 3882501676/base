const geolocate = async () => {


        const setPosition = data_ => {

            console.log("[[ getGeoLocation ]]", data_)
    
            let data = {
                lat: data_.coords.latitude || 0,
                long: data_.coords.longitude || 0
            }

            localStorage.setItem('geolocate',JSON.stringify(data))

            return data

        }

        if (typeof window.navigator.geolocation !== "undefined") {
            window.navigator.geolocation.getCurrentPosition(setPosition)
        }
}
export default geolocate