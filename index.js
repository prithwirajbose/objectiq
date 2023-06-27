require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const tfnode = require('@tensorflow/tfjs-node');
const canvas = require('canvas'),
    fs = require('fs-extra'),
    cocoSsd = require('@tensorflow-models/coco-ssd');
const mobilenet = require('@tensorflow-models/mobilenet');

(async() => {
    const imageBuffer = fs.readFileSync("C:\\Users\\sriba\\Downloads\\img.jpg");
    const tensor = tfnode.node.decodeImage(imageBuffer);
    // Load the model.
    mobilenet.load().then((model) => {
        model.classify(tensor).then((predictions) => {
            console.log('Predictions: ');
            console.log(predictions);
        });
    });


})();