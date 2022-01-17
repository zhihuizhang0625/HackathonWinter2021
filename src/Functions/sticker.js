import jimp from 'jimp';
import mask from '../Stickers/Mask.PNG';
import pennHeart from '../Stickers/PennHeart.png'; 
import quakers from '../Stickers/Quakers.PNG';
import rainbow from '../Stickers/Rainbow.PNG';
import pennLogo from '../Stickers/UpennLogo.PNG';


/*function to place stickers on image
inputs: firstImage - base image; secondImage - sticker; sizeX and sizeY - size of sticker; locX and locY - location on firstImage sticker will be placed
output: png file that contains the composite image
*/
async function addSticker(firstImage, secondString, sizeX, sizeY, locX, locY, callback) {
    try {
        //read first image
        let first = await jimp.read(firstImage);
        //based on if statement, read sticker 
        let second = ""; 
        if (secondString === "mask") {
            second = await jimp.read(mask);
        } else if (secondString === "pennHeart") {
            second = await jimp.read(pennHeart); 
        } else if (secondString === "quakers") {
            second = await jimp.read(quakers); 
        } else if (secondString === "rainbow") {
            second = await jimp.read(rainbow); 
        } else {
            second = await jimp.read(pennLogo); 
        }
        //resize sticker
        second = second.resize(sizeX, sizeY); 
        //create composite
        const width = first.bitmap.width;
        const height = first.bitmap.height;
        const xCoord = (locX/100) * width;
        const yCoord = (locY/100) *height;
        first.composite(second, xCoord, yCoord);
        //export 
        /*first.write("test.png", function() {
            console.log("wrote image"); 
        }); */
        
        first.getBase64(jimp.AUTO, (err, image) => {
            callback(image);
        });
    } catch (e) {
        console.log("Error reading your image"); 
    }
}

export default addSticker;
