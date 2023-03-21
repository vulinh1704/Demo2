const http = require('http');
const fs = require('fs');
const router = require("./src/controller/router");
const error = require("./src/controller/handle/notFoundRouter");
const userService = require("./src/service/userService");
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
    // let pathname = req.url;
    // let matchPath = /\.js|\.css|\.png|\.jpg|\.ttf|\.woff|\.woff2|\.eot/
    // if (matchPath.test(pathname)) {
    //     let contentType = typeFile[pathname.split('.')[1]];
    //     console.log(22,pathname.split('.'))
    //     res.writeHead(200, {'Content-Type' : contentType})
    //     fs.createReadStream(__dirname + pathname).pipe(res);
    // } else {
    //     const arrPath = pathname.split('/');
    //     const trimPath = arrPath[arrPath.length - 1];
    //     console.log(trimPath)
    //     let chosenHandle;
    //     if (typeof router[trimPath] === 'undefined') {
    //         chosenHandle = error.showNotFound;
    //     } else {
    //         chosenHandle = router[trimPath];
    //     }
    //     chosenHandle(req, res);
    // }
    fs.readFile('src/views/index.html', 'utf-8', async (err, indexHtml) => {
        if (err) {
            console.log(err);
        } else {
            let users = await userService.getUsers();
            res.writeHead(200, 'text/html');
            res.write(indexHtml);
            res.end();
        }
    })
});

server.listen(8080)