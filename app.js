const http = require('http');

const server = http.createServer(( request, response ) => {
    console.log('Request hit');
});

server.listen(3000, ()=> {
    console.log("server up and running");
});