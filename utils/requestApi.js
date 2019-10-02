const baseUrl = 'http://api.openweathermap.org/data/2.5/';
const apiKey = 'fbee0d11fcedb59763814b32a431c62a';

export function requestGet(endPoint, query= '') {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    endPoint = `${endPoint}?${query}&APPID=${apiKey}&units=metric`;

    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers,
    }).then(response => {
        if (response.status === 200) {
            return response
                .json()
                .then(json => {
                    return json !== undefined ? json : {};
                })
                .catch(e => ({}));

        }
        return response.status
    });
}
   
    











