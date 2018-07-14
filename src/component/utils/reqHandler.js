const appKey = 'kid_Bkeqsz2af';
const appSecret = '14c60c62a0264b6ab39e38892ac158e0';
const hostUrl = 'https://baas.kinvey.com';

let reqHandler = {
    login: (payload) => {
        return fetch(`${hostUrl}/user/${appKey}/login`, {
            method: 'POST',
            headers: {
                Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res=>{
            return res.json()
        });
    }
};

export default reqHandler;
