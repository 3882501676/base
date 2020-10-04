import React, { PureComponent, useState } from 'react'
import ReactDOM from 'react-dom'

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
registerPlugin(FilePondPluginFileEncode);


// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
class Filepond extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        
      ]
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  render() {
    return (
      <div className="App">
        <FilePond
          ref={ref => (this.pond = ref)}
          files={this.state.files}
          allowMultiple={true}
        //   allowFileEncode={true}
          allowReorder={true}
          maxFiles={3}
          server={null}
          name="files"
          oninit={() => this.handleInit()}
          acceptedFileTypes={['image/png', 'image/jpg', 'image/jpeg','image/gif', 'image/webp' ]}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            // this.setState({
            //   files: fileItems.map(fileItem => fileItem.file)
            // });

            this.props.onFile( fileItems )

          }}
        />
      </div>
    );
  }
}

export default Filepond