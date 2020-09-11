const findcurrency = async __ => {
    // const { self } = __
    const { country } = __
    return new Promise(async resolve => {
        if (country) {
            // const country = self.state.country
            let url = "https://restcountries.eu/rest/v2/name/" + country
            await fetch(url, (err, res) => {
                return res
            })
                .then(res => {
                    return res.json()
                    // // console.log('Country data',res)
                })
                .then(res => {
                    // return res.json()
                    // console.log('Country data', res[0].currencies[0])
                    // setGlobal({
                    //   activeCurrencyIsSet: true,
                    //   activeCurrency: res[0].currencies[0],
                    //   baseCurrency: res[0].currencies[0]
                    // })
                    let currency = res[0].currencies[0]
                    localStorage.setItem(
                        "activeCurrency",
                        JSON.stringify(res[0].currencies[0])
                    )
                    localStorage.setItem(
                        "baseCurrency",
                        JSON.stringify(res[0].currencies[0])
                    )
                    localStorage.setItem("activeCurrencyIsSet", JSON.stringify(true))

                    resolve(currency)
                })
        }
    })
}

export default findcurrency