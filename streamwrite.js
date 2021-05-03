
var fs = require('fs');
var request = require('request');

var stream = fs.createReadStream('./download/rpatest.exe');
// var stream = request('https://www.lottehotelmagazine.com/resources/783148be-3754-4dd1-ab25-51ca1f9909ad_img_food_photo_detail01.jpg');
// const readStream = fs.createReadStream('./download/lotus.jpg', { highWaterMark: 16 });
// console.log(readStream)
let data =[];

var writeStream = fs.createWriteStream('./goal/rpatest.exe');

stream.on('data', function(chunk) {
    data.push(chunk);
    // writeStream.write(data);
});

stream.on('end', function() {
    writeStream.write(data[0]);
    writeStream.end();
});

stream.on('error', function(err) {
    console.log('something is wrong');
    writeStream.close();
});

// const fs = require('fs');

// const readStream = fs.createReadStream('./download/lotus.jpg', { highWaterMark: 16 });
// // const writeStream = fs.createWriteStream('test.jpg');
// // let data = [];

// var request = require('request');

// var stream = request('http://i.imgur.com/dmetFjf.jpg');

// console.log(stream);

// readStream.on('data', (chunk) => {
//     data.push(chunk);
//     // console.log('data :', chunk, chunk.length);
//     // console.log('middle :', chunk.toString());
// });

// readStream.on('end', () =>{
//     writeStream.write(data);
//     writeStream.end();
//     // console.log('end :\n', Buffer.concat(data).toString());
// });

// readStream.on('error', (err) => {
//     console.error('error:', err);
// });