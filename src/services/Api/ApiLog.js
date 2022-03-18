import env from "../../env";
const axios = require('axios').default;

const baseUrl = env.baseUrl;
const token = localStorage.getItem('token');

export const ApiLog = {
    getLogs: async (userId) => {

        const url = baseUrl+`/users/${userId}/logs`;
        
        
        let response = await axios.get(url,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const responseData = response.data;
        if (response.statusText !== 'OK') {
            let err = new Error(responseData.statusText);
            err.code = response.status;
            throw err;
        }
        
        let journal = [];

        for (let day in responseData) {
            journal.push({
                day: day,
                hours: Math.round(100 * responseData[day].hours) / 100,
                logs: responseData[day].logs
            });
        }

        return journal.reverse();
    },

    postLog: async (type) => {
        let response = await axios.post(
            baseUrl+`/logs`,
            {
                "type": type,
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
    },
};