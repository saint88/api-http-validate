const axios = require("../settings/axios_settings")

const userClient = {
    add: (params) => {
        const resp = axios.post('/user', params)


        
        return resp
    }
}

module.exports = userClient