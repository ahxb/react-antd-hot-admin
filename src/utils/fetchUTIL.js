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

    let myHeaders = new Headers({
        'Accept': 'application/json',
        "Content-Type": "application/json",
    });

    return fetch (url, {
        mode: "cors",
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify (body)
        // body: body
    }).then (response => response.json ())
}
export default request;