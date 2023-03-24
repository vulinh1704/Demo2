const fs = require('fs');
const userService = require('../../service/userService');
let qs = require('qs')

class ProductHandle {
    showHome = (req, res) => {
        if (req.method === 'GET') {
            fs.readFile(__dirname + '/views/index.html', 'utf-8', async (err, indexHtml) => {
                if (err) {
                    console.log(err);
                } else {
                    res.writeHead(200, 'text/html');
                    res.write(indexHtml);
                    res.end();
                }
            })
        } else {
            this.addUser(req, res);
        }
    }

    addUser = (req, res) => {
        let data = ''
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', () => {
            let user = qs.parse(data);
            userService.addUser(user).then(() => {
                res.writeHead(301, {location: '/'});
                res.end();
            })

        })
    }

}

module.exports = new ProductHandle();