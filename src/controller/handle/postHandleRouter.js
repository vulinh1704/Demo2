const fs = require('fs');
const userService = require('../../service/userService');
let qs = require('qs')

class PostHandleRouter {
    showHome = (req, res, idUser) => {
        fs.readFile(__dirname + '/views/home.html', 'utf-8', async (err, homeHtml) => {
            if (fs.existsSync(__dirname + `/session/user${idUser}`)) {
                let user = fs.readFileSync(__dirname + `/session/user${idUser}`, "utf-8");
                homeHtml = homeHtml.replace('{user}', user);
                res.writeHead(200, 'text/html');
                res.write(homeHtml);
                res.end();
            } else {
                res.writeHead(301, {location: '/'});
                res.end()
            }
        })
    }
}

module.exports = new PostHandleRouter();