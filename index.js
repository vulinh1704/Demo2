const http = require('http');
const fs = require('fs');
const router = require("./src/controller/router");
const error = require("./src/controller/handle/notFoundRouter");
const typeFile = {
    'jpg': 'images/jpg',
    'png': 'images/png',
    'js': 'text/javascript',
    'css': 'text/css',
    'svg': 'image/svg+xml',
    'ttf': 'font/tff',
    'woff': 'font/woff',
    'woff2': 'font/woff',
    'eot': 'application/vnd.ms-fontobject'
}

let server = http.createServer((req, res) => {
    try {
        let pathname = req.url;
        let matchPath = /\.js|\.css|\.png|\.jpg|\.ttf|\.woff|\.woff2|\.eot/
        if (matchPath.test(pathname)) {
            let contentType = typeFile[pathname.split('.')[1]];
            res.writeHead(200, {'Content-Type': contentType})
            fs.createReadStream(__dirname + '/src/controller/handle/views' + pathname).pipe(res);
        } else {
            const arrPath = pathname.split('/');
            let trimPath = '';
            let id = ''
            if (arrPath.length > 2) {
                trimPath = arrPath[arrPath.length - 2];
                id = arrPath[arrPath.length - 1];
            }
            if (arrPath.length <= 2) {
                trimPath = arrPath[arrPath.length - 1];
            }
            let chosenHandle;
            if (typeof router[trimPath] === 'undefined') {
                chosenHandle = error.showNotFound;
            } else {
                chosenHandle = router[trimPath];
            }
            chosenHandle(req, res, id);
        }
    } catch (e) {
        res.write(500 + '\n' + e);
        res.end();
    }
});

server.listen(8080)