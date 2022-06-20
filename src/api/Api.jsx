import axios from "axios";

export default axios.create({
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
    },
    baseURL: 'https://cmr-laravel-api.herokuapp.com/api'
    // baseURL: 'http://localhost:8000/api'
});


// Launch json server (yarn add json-server)
// yarn json-server -p 3500 -w data/nigeriastate.json