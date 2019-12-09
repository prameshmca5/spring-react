import axios from 'axios';
class WelcomeApiSerive {

    getWelcomeserviceMessage() {
        return axios.get('http://localhost:7060/hellobean');
    }
}

export default new WelcomeApiSerive;