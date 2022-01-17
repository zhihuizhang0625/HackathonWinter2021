import React, { useState } from 'react';
import './App.css';
import { join } from "path";
import Slider from './Components/Slider'
import SidebarItem from './Components/SidebarItem'
import addFrame from './Functions/frame'
import addSticker from './Functions/sticker'
import pennHeart from './Stickers/PennHeart.png';
import mask from './Stickers/Mask.PNG';
import quakers from './Stickers/Quakers.PNG';
import rainbow from './Stickers/Rainbow.PNG';
import upennLogo from './Stickers/UpennLogo.PNG';
// import addFilter from './Functions/filter.js';
import red1 from './Stickers/Penn Frame Red.png';
import red2 from './Stickers/Penn Frame Red 2.png';
import blue1 from './Stickers/Penn frame blue.png';
import blue2 from './Stickers/Penn Frame Blue 2.png';
import filter1 from './Stickers/vertical.png';
import addFilter from './Functions/filter'

const DEFAULT_OPTIONS = [
    {
        name: 'Sticker',
    },

    {
        name: 'Frame',
    },


    {
        name: 'Filter',
    },

]
function App() {

    const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
    const [options, setOptions] = useState(DEFAULT_OPTIONS)
    const [previousImage, setPreviousImage] = useState(null);
    const [mode, setMode] = useState('Sticker');
    const selectedOption = options[selectedOptionIndex]
    const [selectedImage, setSelectedImage] = useState(null);


    const [axisX, setAxisX] = useState({
        name: 'axisX',
        key: 0,
        value: 50,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    })
    const [axisY, setAxisY] = useState({
        name: 'axisY',
        key: 1,
        value: 50,
        range: {
            min: 0,
            max: 100
        },
        unit: '%'
    })

    // const axisX = () => {

    //     const [axisX, setAxisX] = useState({
    //         name: 'axisX',
    //         key: 0,
    //         value: 50,
    //         range: {
    //             min: 0,
    //             max: 100
    //         },
    //         unit: '%'
    //     });

    //     return (
    //       <div className='slider'>
    //         <input type="range" className="slider" min={axisX.range.min} max={axisX.range.max} 
    //          onChange={(event) => setAxisX(axisX.value, event.target.value)} />
    //       </div>
    //     );
    //   };

    // function handleSliderChange({ target }) {

    //     setValue (event => { 
    //         this.value = target.value;
    //         if (target.name === "AxisX") {
    //             setAxisX(axisX.value, target.value)
    //         }
    //         if (target.name === "AxisY") {
    //             setAxisY(axisY.value, target.value)
    //         }
    //       })


    // }


    return (


        <div className="container">
            <div className='header-container'>

                <div className="page-header-1">

                    <h1>Snap Penn</h1>
                </div>
                <div className="page-header-2">
                    <h2>dedicated photo editor for Penn community</h2>
                </div>
            </div>
            <div className="image-sidebar-container">
                <div className="extra-space-holder1"> </div>
                <div className="main-image-container">
                    {/* //getImageStyle will be returned by the separate component functions */}
                    <div className="main-image" > {/*change*/}
                        {/* <button class="btn"><i class="fa fa-download"></i> Download</button> */}
                        <img alt="not found" width={"250px"} src={selectedImage} />










                    </div>
                </div>
                <div className="sidebar-container">
                    <div className="sidebar">
                        {options.map((option, index) => {
                            return (
                                <SidebarItem
                                    name={option.name}
                                    active={index === selectedOptionIndex}
                                    handleClick={() => setMode(option.name)}
                                />
                            )
                        })}
                    </div>
                </div>






            </div>
            {/* <div className="feature-option-display-container">
            display options under the chosen feature
            <FeatureOptionDisplay />
          </div> */}
    <div className="upload-address-container">
        <div className="upload-address">
           {/* return( <DownloadAddress/>)  */}
             <input type="file" name="myImage" onChange={e => {
              console.log(e.target.files[0])
              setSelectedImage(URL.createObjectURL(e.target.files[0]));
              setPreviousImage(URL.createObjectURL(e.target.files[0]));
            }} /> 

            {/* <input type="file" id="real-file" hidden="hidden" onChange={e => {
              console.log(e.target.files[0])
              setSelectedImage(URL.createObjectURL(e.target.files[0]));
            }} />
            <button type="button" id="custom-button">CHOOSE A FILE</button>
            <span id="custom-text">No file chosen</span> */}
        </div>
            </div>

            <div className="feature-button-container">
                <div className="extra-space-holder2"></div>
                <div className="feature-display-container">
                    <div className="feature-display">
                        {(mode === "Sticker") && (
                            <>
                                <div className="sticker-display-container">
                                    <div className="slider-container">
                                        <p>  Please set the position of the sticker via the slider bars below.  </p>
                                        <div className="axisX">
                                            <p> left </p>
                                            <Slider
                                                name="axisX"
                                                min={axisX.range.min}
                                                max={axisX.range.max}
                                                value={axisX.value}
                                                onChange={(event) => setAxisX({ ...axisX, value: event.target.value })}
                                                className="slider"
                                            />
                                            <p>  right  </p>
                                        </div>
                                        <div className="axisY">
                                            <p>  low  </p>
                                            <Slider
                                                name="axisY"
                                                min={axisY.range.min}
                                                max={axisY.range.max}
                                                value={axisY.value}
                                                onChange={(event) => setAxisY({ ...axisY, value: event.target.value })}
                                                className="slider"
                                            />
                                            <p>  high  </p>
                                        </div>

                                        <div>
                                            <p>Please choose the sticker to add.</p>


                                        </div>


                                    </div>

                                    <div className="sticker-items-display">


                                        <img className="sticker" alt="rainbow" src={rainbow} onClick={() =>{
                                            setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                            addSticker(selectedImage, "rainbow", 100, 100, 200, 200, image => setSelectedImage(image))}}></img>
                                        <img className="sticker" alt="upennLogo" src={upennLogo} onClick={() => {
                                            setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                            addSticker(selectedImage, "upennLogo", 100, 100, 200, 200, image => setSelectedImage(image))}}></img>
                                        <img className="sticker" alt="pennheart" src={pennHeart} onClick={() => {
                                            setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                            addSticker(selectedImage, "pennHeart", 100, 100, 200, 200, image => setSelectedImage(image))}}></img>
                                        <img className="sticker" alt="mask" src={mask} onClick={() => {
                                            setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                            addSticker(selectedImage, "mask", 100, 100, 200, 200, image => setSelectedImage(image))}}></img>
                                        <img className="sticker" alt="quakers" src={quakers} onClick={() => {
                                            setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                            addSticker(selectedImage, "quakers", 100, 100, 200, 200, image => setSelectedImage(image))}}></img>



                                    </div>
                                </div>

                            </>

                        )}

                        {(mode === "Frame") && (



                            <div className="frame-display-container">

                                <div className="frame-items-container">
                                    <img className="sticker" alt="red1" src={red1} onClick={() => {
                                        setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                        addFrame(selectedImage, "red1", image => setSelectedImage(image))}}></img>
                                    <img className="sticker" alt="red2" src={red2} onClick={() => {
                                        setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                        addFrame(selectedImage, "red2", image => setSelectedImage(image))
                                    }}></img>
                                    <img className="sticker" alt="blue1" src={blue1} onClick={() => {
                                        setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                        addFrame(selectedImage, "blue1", image => setSelectedImage(image))}}></img>
                                    <img className="sticker" alt="blue2" src={blue2} onClick={() => {
                                        setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                        addFrame(selectedImage, "blue2", image => setSelectedImage(image))}}></img>
                                    <button class="button1" onClick={() => {
                                        setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                        addFrame(selectedImage, "./Stickers/testFrame.png", image => setSelectedImage(image))}}>Add Frame</button>
                                </div>


                            </div>


                        )

                        }

                        {(mode === "Filter") && (



                            <div className="filter-display-container">

                                <div className="filter-items-container">
                                    {/* need to add addFilter function */}
                                    <img className="sticker" alt="filter1" src={filter1} onClick={() => {
                                        setPreviousImage(JSON.parse(JSON.stringify(selectedImage)));
                                        addFilter(selectedImage, "vertical", image =>setSelectedImage(image))
                                        }}></img>
                                    {/* <img className="sticker" alt="red2" src={red2} onClick={() => addFrame(selectedImage, "red2", 100, 100, 200, 200, image => setSelectedImage(image))}></img>
                                    <img className="sticker" alt="blue1" src={blue1} onClick={() => addFrame(selectedImage, "blue1", 100, 100, 200, 200, image => setSelectedImage(image))}></img>
                                    <img className="sticker" alt="blue2" src={blue2} onClick={() => addFrame(selectedImage, "blue2", 100, 100, 200, 200, image => setSelectedImage(image))}></img> */}
                                    {/* <button class="button3" onClick={() => addFilter(selectedImage, "./Stickers/testFrame.png", image => setSelectedImage(image))}>Add Filter</button> */}


                                </div>


                            </div>


                        )

                        }




                    </div>







                </div>
                <div className="download-container">
                 <a href={selectedImage} download target="_blank"> <button class="btn">Download  </button> </a> {/*doesn't seem to work?*/}
                </div>
                <button class="btn" onClick={() => {
                    setSelectedImage(previousImage)
                    console.log(previousImage);
                    }}>Undo</button>
            </div>
        </div>


    )
}

export default App;
