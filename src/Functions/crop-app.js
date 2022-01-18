import React from 'react';
import ImageCropper from "./components/imagecropper";
import pika from './pika.jpg';
function App() {
    return (
        <div>
            <ImageCropper src={pika} />
        </div>
    );
}

export default App;