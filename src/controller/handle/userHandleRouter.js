const fs = require('fs');
const userService = require('../../service/userService');

class ProductHandle {
    showHome(req, res) {
        fs.readFile(__dirname + '/views/index.html', 'utf-8', async (err, indexHtml) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, 'text/html');
                res.write(indexHtml);
                res.end();
            }
        })
    }


}

module.exports = new ProductHandle();