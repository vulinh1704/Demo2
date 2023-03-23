var ProductHandle = /** @class */ (function () {
    function ProductHandle() {
    }
    ProductHandle.prototype.showHome = function (req, res) {
        this.addUser(req, res);
    };
    ProductHandle.prototype.addUser = function (req, res) {
        // console.log(1)
        // let data = ''
        // req.on('data', chunk => {
        //     data += chunk;
        // })
        // req.on('end', () => {
        //     let user = qs.parse(data);
        //     console.log(user);
        //     res.write('Thành công');
        //     res.end();
        // })
    };
    return ProductHandle;
}());
var p = new ProductHandle();
p.showHome(1, 2);
