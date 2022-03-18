import env from "../../env";
const axios = require('axios').default;

const baseUrl = env.baseUrl+'/users';

export const ApiUser = {
    loginUser: async (email, password) => {
        let response = await axios.post(baseUrl+`/login`, {
            "email": email,
            "password": password
        });
        console.log('esto es response', response.data,  response);
        const responseData = response.data;
        if (response.statusText !== 'OK') {
            let err = new Error(responseData.statusText);
            err.code = response.status;
            throw err;
        }
        return responseData;
    },
};