import axios from 'axios';
class WelcomeApiSerive {

    getWelcomeserviceMessage(name) {
       // return axios.get(`http://localhost:7060/hellobean/path/${name}`);
        return axios.get('https://rameshp.in/test/testapi.php');
    }

    getTodoserviceMessage(username) {
         // return axios.get(`http://localhost:7060/hellobean/path/${name}`);
        return axios.get(`http://localhost:7060/users/${username}/todos`);
    }

    getTodoserviceDelete(username, id) {
        // return axios.get(`http://localhost:7060/hellobean/path/${name}`);
        return axios.delete(`http://localhost:7060/users/${username}/todos/${id}`);
    }
}

export default new WelcomeApiSerive;