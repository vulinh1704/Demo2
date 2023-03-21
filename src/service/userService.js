const connection = require('../model/connection');
connection.connection();

class UserService {
    getUsers() {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query('select * from users', (err, users) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(users)
                }
            })
        })
    }
}

module.exports = new UserService();