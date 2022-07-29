const axios = require("../settings/axios_settings");

const petClient = {
    add: (params) => {
        return axios.post('/pet', params);
    },
    findPet: (id) => {
        return axios.get(`/pet/${id}`);
    },
    delete: (id) => {
        axios.delete(`/pet/${id}`);
    }
};

module.exports = petClient;