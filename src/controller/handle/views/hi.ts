

class ProductHandle {
    showHome(req, res) {
       this.addUser(req, res)
    }

    addUser(req, res) {
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
    }

}

let p = new ProductHandle()
p.showHome(1, 2)