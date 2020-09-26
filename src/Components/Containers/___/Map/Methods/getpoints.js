
const contentful = require("contentful");

const reduce = (entry) => {

    let { sys, fields } = entry

    let id = sys.id
    let createdAt = sys.createdAt
    let updatedAt = sys.updatedAt
    let slug = fields.title.toLowerCase()

    return { id, createdAt, updatedAt, slug, ...fields }
    
  }

const getpoints = async (op) => {

    return new Promise(async resolve => {

        const { self } = op

        // client.getSpace('rjamtt70s7tx')
        const client = contentful.createClient({
            space: "rjamtt70s7tx",
            accessToken: "huCscS5fIHtLPtgWsQhx_051Gq3U3gZr_C0NM-sFZwc",
        });

        await client

            .getEntries({
                content_type: 'point'
            })


            .then((entries) => {

                console.log('Contentful : Points : Raw Entries ---> ', entries )
                // console.log('Contentful : Pages ---> ', entries.items.map( a => a.fields ) );

                let points = entries.items.map(a => this.reduce(a))

                console.log('Contentful : Points : Reduced Entries ---> ', points )

                self.setState({

                    points: points

                })

                resolve(points)

            })
            .catch((err) => console.log(err));

    })
}
export default getpoints