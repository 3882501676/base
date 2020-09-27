const contentful = require('contentful-management')



const create = (op) => {


    return new Promise( async resolve => {

      const { values } = op

      const client = contentful.createClient({
        accessToken: 'CFPAT-8pSIZCPz2_ltPfxdil7z0suZ_TDPM5NKiCSop6x_s2Y'
      })

      // const client = contentful.createClient({
      //   // This is the space ID. A space is like a project folder in Contentful terms
      //   space: "rjamtt70s7tx",
      //   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      //   accessToken: "huCscS5fIHtLPtgWsQhx_051Gq3U3gZr_C0NM-sFZwc",
      // })
      
      let fields_ = {}

      const assignValues = (data) => {
        
        fields_[data.label] = {
          'en-US': data.value
        }

        return fields_
      }

      let fields = values.map( a => assignValues(a) )

      console.log('Fields_ ---> ',fields_)
      
      client.getSpace('rjamtt70s7tx')
      // .then((space) => space.getEnvironment('<environment_id>'))
      .then((environment) => environment.createEntry('point', {
        fields: fields_
      }))

      .then((entry) => entry.publish())
      .then((entry) => { 
        
        console.log(entry)

        resolve(entry)

      }
      )
      .catch(console.error)




    })

}

export default create