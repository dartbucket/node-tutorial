const http = require('http');

const server = http.createServer((req, res)=>{

    console.log(req.url);

    console.log(req.method);

    // GET, POST, PUT , DELETE
    console.log("Request Hit");

    res.setHeader('Content-Type', 'text/plain');

    res.write("Hello World");

    res.end();
});

server.listen(3000, () => {
    console.log("Server up and running");
});