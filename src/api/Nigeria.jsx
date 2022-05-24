import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:3500'
});


// Launch json server (yarn add json-server)
// yarn json-server -p 3500 -w data/nigeriastate.json