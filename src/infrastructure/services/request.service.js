const axios = require('axios').default;

const request = async (method, url, data) => {
    const result = await axios({
        method,
        url,
        data
    });
    return result;
}

module.exports = request;
