const {faker} = require('@faker-js/faker')

// const userData = {
//         id: 0,
//         username: faker.internet.userName(),
//         firstName: faker.name.findName(),
//         lastName: faker.name.lastName(),
//         email: faker.internet.email(),
//         password: faker.internet.password(),
//         phone: faker.phone.number('+7916#######'),
//         userStatus: 0
// }

module.exports = {
    id: 0,
    username: faker.internet.userName(),
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number('+7916#######'),
    userStatus: 0
}