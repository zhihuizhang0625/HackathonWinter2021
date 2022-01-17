import jimp from 'jimp';
import blueFrame1 from '../Stickers/Penn frame blue.png'
import blueFrame2 from '../Stickers/Penn Frame Blue 2.png'
import redFrame1 from '../Stickers/Penn Frame Red.png'
import redFrame2 from '../Stickers/Penn Frame Red 2.png'

const addFrame = async (src, frameString, callback) => {
    try {
        console.log('got here')
        const srcImg = await jimp.read(src);
        console.log(srcImg);
        let frameImg = ""; 
        if (frameString = "blue1") {
            frameImg = await jimp.read(blueFrame1); 
        } else if (frameString = "blue2") {
            frameImg = await jimp.read(blueFrame2); 
        } else if (frameString = "red1") {
            frameImg = await jimp.read(redFrame1); 
        } else {
            frameImg = await jimp.read(redFrame2); 
        }
        const width = srcImg.bitmap.width;
        const height = srcImg.bitmap.height;
        frameImg.resize(width, height);
        srcImg.composite(frameImg, 0, 0);
        srcImg.getBase64(jimp.AUTO, (err, image) => {
            callback(image);
        })
    } catch (e) {
        console.log("Error reading your image"); 
    }
};

export default addFrame;