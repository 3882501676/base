const geolocate = async () => {
    // const { self } = __

    // return new Promise(async resolve => {

        const setPosition = data_ => {

            console.log("[[ getGeoLocation ]]", data_)
            // // console.log('getGeolocation', data_)

            // self.setState({
            //   lat: data_.coords.latitude || 0,
            //   long: data_.coords.longitude || 0
            // })

            // Fn.reverseGeocodeCity({ self })
            let data = {
                lat: data_.coords.latitude || 0,
                long: data_.coords.longitude || 0
            }

            // resolve(data)
            return data

        }

        if (typeof window.navigator.geolocation !== "undefined") {
            window.navigator.geolocation.getCurrentPosition(setPosition)
        }
    // })
}
export default geolocate