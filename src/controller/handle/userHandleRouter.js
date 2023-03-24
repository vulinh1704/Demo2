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
                fs.readFile(__dirname + '/views/index.html', 'utf-8', async (err, indexHtml) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.writeHead(200, 'text/html');
                        indexHtml = indexHtml.replace('<!--{NofiSuccess}-->', '<div class="row" id="nofi">\n' +
                            '        <div class="col-md-4 col-lg-4" style="margin-top: 13%; margin-left: 80%">\n' +
                            '            <div class="panel panel-default">\n' +
                            '                <div class="panel-body">\n' +
                            '                    <div class="alert alert-success">\n' +
                            '                        <strong class="default"><i class="fa-solid fa-check"></i> Register success</strong>\n' +
                            '                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>\n' +
                            '                    </div>\n' +
                            '                </div>\n' +
                            '            </div>\n' +
                            '        </div>\n' +
                            '    </div>')
                        indexHtml = indexHtml.replace('//call showAlert' , 'showAlert()')
                        res.write(indexHtml);
                        res.end();
                    }
                })
            })

        })
    }

}

module.exports = new ProductHandle();