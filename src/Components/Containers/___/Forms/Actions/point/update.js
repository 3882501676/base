const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: '<content_management_api_key>'
})


client.getSpace('<space_id>')
.then((space) => space.getEnvironment('<environment_id>'))
.then((environment) => environment.createEntry('<content_type_id>', {
  fields: {
    title: {
      'en-US': 'Entry title'
    }
  }
}))
.then((entry) => console.log(entry))
.catch(console.error)

const update = async(op) => {

    return new Promise( async resolve => {


        

        resolve(op)

    })

}

export default update