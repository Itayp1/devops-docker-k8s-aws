import Axios from 'axios'
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const axios = Axios.create({

    headers: { 'X-Custom-Header': 'foobar' },
    auth: {
        username: 'itayp',
        password: '519743'
    }

})


axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // {
    //     "url": "/api/workerHouers",
    //     "method": "get",
    //     "headers": {
    //         "Accept": "application/json, text/plain, */*",
    //         "X-Custom-Header": "foobar",
    //         "Authorization": "Basic aXRheXA6NTE5NzQz"
    //     },
    //     "auth": {
    //         "username": "itayp",
    //         "password": "519743"
    //     },
    //     "baseURL": "http://localhost:3001",
    //     "transformRequest": [
    //         null
    //     ],
    //     "transformResponse": [
    //         null
    //     ],
    //     "timeout": 0,
    //     "xsrfCookieName": "XSRF-TOKEN",
    //     "xsrfHeaderName": "X-XSRF-TOKEN",
    //     "maxContentLength": -1
    // }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // Do something before request is sent
    // {
    //     "url": "/api/workerHouers",
    //     "method": "get",
    //     "headers": {
    //         "Accept": "application/json, text/plain, */*",
    //         "X-Custom-Header": "foobar",
    //         "Authorization": "Basic aXRheXA6NTE5NzQz"
    //     },
    //     "auth": {
    //         "username": "itayp",
    //         "password": "519743"
    //     },
    //     "baseURL": "http://localhost:3001",
    //     "transformRequest": [
    //         null
    //     ],
    //     "transformResponse": [
    //         null
    //     ],
    //     "timeout": 0,
    //     "xsrfCookieName": "XSRF-TOKEN",
    //     "xsrfHeaderName": "X-XSRF-TOKEN",
    //     "maxContentLength": -1
    // }

}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default axios;