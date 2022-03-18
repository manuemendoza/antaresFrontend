import env from "../../env";
const axios = require('axios').default;

const baseUrl = env.baseUrl+'/users';
const token = localStorage.getItem('token');

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

    getUsers: async (userId) => {

        const url = baseUrl;
        
        let response = await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const responseData = response.data;
        console.log('esto es el response', responseData);
        if (response.statusText !== 'OK') {
            let err = new Error(responseData.statusText);
            err.code = response.status;
            throw err;
        }

        return responseData;
    },

    postUser: async (name, surname, email, password, role) => {
        let response = await axios.post(
            baseUrl,
            {
                "name": name,
                "surname": surname,
                "email": email,
                "password": password,
                "role": role
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        console.log('esto es responselogs', response.data,  response);
        const responseData = response.data;
        if (response.statusText !== 'OK') {
            let err = new Error(responseData.statusText);
            err.code = response.status;
            throw err;
        }
        return responseData;
    }
};