const axios = require('axios').default;
const axiosRetry = require('axios-retry');

const axios_qa = axios.create({
    baseURL: 'https://petstore.swagger.io/v2',
});

axiosRetry(axios_qa, {
    retries: 3,
    retryDelay: (retryCount) => {
        return retryCount * 2000;
    },
    retryCondition: (error) => {
        return [500, 404].includes(error.response.status);
    }
})

module.exports = axios_qa