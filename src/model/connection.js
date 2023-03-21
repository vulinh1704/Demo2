const mysql = require('mysql2');

class Connection {
    configToMySql = `mysql://root:mBlbExsxUF782kTcnyRb@containers-us-west-25.railway.app:5985/railway`

    getConnection() {
        return mysql.createConnection(this.configToMySql)
    }

    connection() {
        this.getConnection().connect(err => {
            if(err) {
                console.log(err);
            } else {
                console.log('Connect database success');
            }
        });
    }
}

const connection = new Connection();
module.exports = connection;