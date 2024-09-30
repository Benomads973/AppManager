import axios from 'axios';

const createYourApp = async (data) => {
    try {
        const response = await axios.post('http://localhost:5000/deploy', data);
        console.log(response.data)
        return response.data;
    } catch (err) {
        return err.message
    }
}

export { createYourApp }