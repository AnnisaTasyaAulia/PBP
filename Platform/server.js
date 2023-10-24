const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;

    const {method} = request;

    if(method === 'GET') {
        response.end('<h1>Hello HTTP Server!</h1>');
    }
    if(method === 'POST') {
        response.end('<h1>Hai</h2>');
    }
    if(method === 'PUT') {
        response.end('<h1>Bonjour</h1>');
    }
    if(method === 'DELETE') {
        response.end('<h1>Salam!</h1>');
    }
};

const sever = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

sever.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});