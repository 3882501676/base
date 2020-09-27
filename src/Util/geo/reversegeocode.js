const reversegeocode = async __ => {
    // // console.log('[[ Fn.reverseGeocodeCity ]]')
    // const { self } = __
    const { lat, lon } = __
    return new Promise(async resolve => {
        let url =
            "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=" +
            lat +
            "," +
            lon +
            ",250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=ZZN2MPuexLyuz3VR0KDD&app_code=TnEsVJR8k3zxGMiAkbP_EQ"
        fetch(url, (e, r) => {
            return r
        })
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log('reverse geocode res', res)

                // // console.log('[[ Fn.reverseGeocodeCity ]]', JSON.stringify(res.Response && res.Response.View && res.Response.View[0] && res.Response.View[0].Result[0] && res.Response.View[0].Result[0].Location && res.Response.View[0].Result[0].Location.Address))

                let data =
                    res.Response &&
                    res.Response.View[0] &&
                    res.Response.View[0].Result[0] &&
                    res.Response.View[0].Result[0].Location &&
                    res.Response.View[0].Result[0].Location.Address &&
                    res.Response.View[0].Result[0].Location.Address.AdditionalData
                let location =
                    res.Response &&
                    res.Response.View[0] &&
                    res.Response.View[0].Result[0] &&
                    res.Response.View[0].Result[0].Location &&
                    res.Response.View[0].Result[0].Location.Address
                let address =
                    res.Response &&
                    res.Response.View[0] &&
                    res.Response.View[0].Result[0] &&
                    res.Response.View[0].Result[0].Location &&
                    res.Response.View[0].Result[0].Location.Address

                // for (let item of data) {
                //   if (item.key === "CountryName") {
                //     let country = item.value
                //     // console.log('country', country)
                //     self.setState({ country: country, countrySet: true })
                //   }
                // }
                // self.setState({
                //   location: address,
                //   city: address.County,
                //   suburb: address.District,
                //   province: address.State,
                //   searchFormReady: true,
                //   ready: true
                // })
                // Fn.findCurrency({ self })
                // console.log('[[ store : location ]]', location)
                // methods.store({ type: "location", data: location })
                // methods.store({ type: "locationIsSet", data: true })

                resolve(location)
            })
    })
}

export default reversegeocode