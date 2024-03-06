const http = require('http');

const server = http.createServer((request, response)=>{
    console.log("Request Hit");
});

server.listen(3000, () => {
    console.log("Server up and running");
});