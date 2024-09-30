const axios = require('axios');
const FormData = require('form-data');

const deployMyApp = async (binaryString) => {
    const form = new FormData();
    form.append('file', binaryString, 'deploy.json');

    try {
        const response = await axios.post(
            `${process.env.BENOMADS_HOST}/api/deployer`,
            form,
            {
                headers: {
                ...form.getHeaders(),
                'Authorization': 'Bearer ' + process.env.BENOMADS_API_KEY 
                }
            }
        );
        return response
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = { deployMyApp }