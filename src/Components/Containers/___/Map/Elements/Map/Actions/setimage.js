
const setimage = (op) => {


      const { self, item } = op


      if ( item.fields && item.fields.media && item.fields.media[0] && item.fields.media[0].fields && item.fields.media[0].fields.file  ) {


        return item.fields.media[0].fields.file.url

      }
      else {
     
        const image =  'https://static.vecteezy.com/system/resources/previews/000/599/219/non_2x/vector-abstract-yellow-triangles-random-pattern-on-white-background.jpg'
        
return image
      }



}

export default setimage