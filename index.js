const fs = require('fs');
const http = require('http');


function serveStatic(name, callback) {
    fs.readFile(name, function (err, data) {
        if (err) {
            return callback(err)
        }
        callback(err, data.toString())
    })
}

const server = http.createServer(function (request, response) {
    console.log('Recibi un request ' + request.url);
    if (request.url === '/') {
        serveStatic('texto.txt', function (err, content) {
            response.end(content)
        });
    } else {
        response.statusCode = 404;
        response.end('Not found');
    }
});

server.listen(3000, function () {
    console.log('Servidor iniciado. Escuchando en el puerto 3000')
});
