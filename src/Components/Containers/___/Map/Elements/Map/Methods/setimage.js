const valid_url = (string) => {

  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(string);

}

const setimage = async (op) => {


  // return new Promise(async resolve => {


    const { self, point } = op

    const placeholder = 'https://static.vecteezy.com/system/resources/previews/000/599/219/non_2x/vector-abstract-yellow-triangles-random-pattern-on-white-background.jpg'

    // console.log('Point data ===> ', point)

    let image_endpoint = point.urls

    if (valid_url(image_endpoint)) {

      return await fetch(image_endpoint)

        .then( res => res.json() )

        .then( res => res )
    }
    else {
  
      // resolve(placeholder)
      return { file: placeholder }
  
    }

  // })


  // return image

  // if ( item.fields && item.fields.media && item.fields.media[0] && item.fields.media[0].fields && item.fields.media[0].fields.file  ) {


  //   return item.fields.media[0].fields.file.url

  // }

  // else {

  //   const image =  'https://static.vecteezy.com/system/resources/previews/000/599/219/non_2x/vector-abstract-yellow-triangles-random-pattern-on-white-background.jpg'

  //   return image

  // }

}

export default setimage