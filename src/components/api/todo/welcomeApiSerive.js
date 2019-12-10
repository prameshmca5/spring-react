import axios from 'axios';
class WelcomeApiSerive {

    getWelcomeserviceMessage(name) {
       // return axios.get(`http://localhost:7060/hellobean/path/${name}`);
        return axios.get('https://rameshp.in/test/testapi.php');
    }

    getTodoserviceMessage(username) {
        debugger
        // return axios.get(`http://localhost:7060/hellobean/path/${name}`);
        return axios.get(`http://localhost:7060/users/${username}/todos`);
    }
}

export default new WelcomeApiSerive;