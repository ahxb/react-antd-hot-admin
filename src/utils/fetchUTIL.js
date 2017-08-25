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

export default request;