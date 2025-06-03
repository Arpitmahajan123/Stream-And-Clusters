// Streams In NodeJs.
// Streams are a way to handle data in a continuous flow. They are useful when dealing with large amounts of data or when you want to process data as it arrives rather than waiting for the entire dataset to be available.
// Streams are a core part of Node.js and are used extensively in many Node.js modules and frameworks

import express from 'express';
import fs from 'fs';
import path from 'path';
import status from 'express-status-monitor';
import zlib from 'zlib';

const app = express();
const port = 3000;
app.use(status());

// Best Way And optimize way to compress files in NodeJs is using zlib module.
// This will compress the content.txt file and create a new file content.txt.gz
// Processes of Compression: (Stream Read) --> (Zipper) --> (Stream Write)

fs.createReadStream('./content.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./content.txt.gz'));


app.get('/', (req, res) => {
    // This Is First Approach To Read File.
    // fs.readFile("./content.txt", (err, data) => {
    //     res.end(data);
    // });
    // Read File Using Streams.

    const stream = fs.createReadStream("./content.txt", "utf-8");
    stream.on("data", (chunk) => res.write(chunk));
    stream.on("end", () => res.end());

    // As A result You Can See The Memory Usage In The Browser, It Will Be Stable.

});


app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});


