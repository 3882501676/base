const getpages = async (op) => {

    return new Promise(async resolve => {

        const client = contentful.createClient({
            space: "rjamtt70s7tx",
            accessToken: "huCscS5fIHtLPtgWsQhx_051Gq3U3gZr_C0NM-sFZwc",
        });

        await client

            .getEntries({
                content_type: 'page'
            })

            .then((entries) => {

                // console.log('Contentful : Pages : Raw Entries ---> ', entries )
                // console.log('Contentful : Pages ---> ', entries.items.map( a => a.fields ) );

                let pages = entries.items.map(a => this.reduce(a))

                console.log('Contentful : Pages : Reduced Entries ---> ', pages)

                self.setState({

                    pages: pages

                })

                resolve(pages)

            })
            .catch((err) => console.log(err));

    })
}
export default getpages