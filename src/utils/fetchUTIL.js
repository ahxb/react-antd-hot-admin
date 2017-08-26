import queryString from 'query-string';
import _lodash from 'lodash';

let request = {};

request.get = function (url, params) {
    if (params) {
        url += '?' + queryString.stringify (params);
    }
    return fetch (url, {
        method: 'GET',
        mode: "cors",
    }).then (response => response.json ())
}

request.post = function (url, body) {

    return fetch (url, {
        mode: "cors",
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'creations': 'application/json',
        },
        body: JSON.stringify (body)
    }).then (response => response.json ())
}
export default request;