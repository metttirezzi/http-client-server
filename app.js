// using http module to creating network applications
const http = require('http');
//properties
//methods 
//events 
const server = http.createServer((req , res) => {
    if (req.url === '/') {                 // defining route on http
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses') {        // defining another route 
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});



server.listen(3000);

console.log('Lisenting on port 3000...')