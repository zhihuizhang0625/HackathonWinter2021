import jimp from 'jimp';
import horizontal from '../Stickers/horizontal.png';
import vertical from '../Stickers/vertical.png';
import blue from '../Stickers/blue.png';
import red from '../Stickers/red.png';


/*function to place filter on image
inputs: firstImage - base image; secondString - filter; sizeX and sizeY - size of filter; locX and locY - location on firstImage filter will be placed
output: png file that contains the composite image
*/
async function addFilter(firstImage, secondImage, sizeX, sizeY, locX, locY, callback) {
    try {
        console.log('got here')
        //read first image
        const srcImg = await jimp.read(firstImage);
        console.log(srcImg);
        //read filter
        let second = ""; 
        if (secondImage == "horizontal") {
            second = await jimp.read(horizontal); 
        } else if (secondImage == "blue") {
            second = await jimp.read(blue); 
        } else if (secondImage == "red") {
            second = await jimp.read(red); 
        } else {
            second = await jimp.read(vertical); 
        }
        //resize filter
        const width = srcImg.bitmap.width;
        const height = srcImg.bitmap.height;
        second.resize(width, height);
        //create composite
        srcImg.composite(second, 0, 0);
        //export 
        srcImg.getBase64(jimp.AUTO, (err, image) => {
            callback(image);
        })
    } catch (e) {
        console.log("Error reading your image. Please try again");
    }
    
};

export default addFilter;