const connection = require('../model/connection');
connection.connection();

class UserService {
    connect

    constructor() {
        this.connect = connection.getConnection();
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            this.connect.query('select * from users', (err, users) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(users)
                }
            })
        })
    }

    addUser(user) {
        return new Promise((resolve, reject) => {
            this.connect.query(`insert into users(name, password, sex, email, date_of_birth)
                                values ('${user.lastname + ' ' + user.firstname}', '${user.password}',
                                        '${user.sex}', '${user.phone}',
                                        '${user.year + "-" + user.month + '-' + user.day}')`, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    }

    checkUser(user) {
        return new Promise((resolve, reject) => {
            this.connect.query(`select * from users where email = '${user.email}' and password = '${user.password}'`, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
}

module.exports = new UserService();