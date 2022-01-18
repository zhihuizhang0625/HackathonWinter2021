var jimp = require('jimp'); 

async function resize(image, sizeX, sizeY) {
    let imageRead = await jimp.read(image); 
    imageEdit = imageRead.resize(sizeX, sizeY); 
    imageEdit.write("test.png", function() {
        console.log("wrote image"); 
    });  
}