const contentful = require('contentful-management')



const create = (e) => {


  e.preventDefault()

      console.log(e)
      
      e.preventDefault()

      const data = new FormData(e.target);

      console.log('formdata ---< ',data)

    return new Promise( async resolve => {

      // const { e } = op

      

      // const client = contentful.createClient({
      //   accessToken: '<content_management_api_key>'
      // })

      // const client = contentful.createClient({
      //   // This is the space ID. A space is like a project folder in Contentful terms
      //   space: "rjamtt70s7tx",
      //   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      //   accessToken: "huCscS5fIHtLPtgWsQhx_051Gq3U3gZr_C0NM-sFZwc",
      // })
      
      
      // client.getSpace('rjamtt70s7tx')
      // // .then((space) => space.getEnvironment('<environment_id>'))
      // .then((environment) => environment.createEntry('point', {
      //   fields: {
      //     title: {
      //       'en-US': 'Entry title'
      //     }
      //   }
      // }))
      // .then((entry) => console.log(entry))
      // .catch(console.error)


        resolve({})

    })

}

export default create