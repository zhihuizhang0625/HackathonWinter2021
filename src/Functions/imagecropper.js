import React from "react";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";
import "./imagecropper.css";

class ImageCropper extends React.Component {

    constructor() {
        super();
        this.state = {
            imageDestination: ""
        }
        this.imageElement = React.createRef();
    }

    componentDidMount() {
        const cropper = new Cropper(this.imageElement.current, {
            zoomable: false,
            scalable: false,
            aspectRatio: 1,
            crop: () => {
                // set a preview for image cropping
                const canvas = cropper.getCroppedCanvas();
                this.setState({imageDestination: canvas.toDataURL("image/jpg")});
            }

        })
    }

    render() {
        return (
            <div>
                <div className="img-container">
                    <img ref={this.imageElement} src={this.props.src} alt="Source" />
                </div>
                <img className="img-preview" src={this.state.imageDestination} alt="Destination" /> 
            </div>
        );
    }
}

export default ImageCropper;