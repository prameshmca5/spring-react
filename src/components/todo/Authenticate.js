class Authenticate {
    registerLoginSuccess(username, password){
        console.log("Welcome Authenticate" + username);
        sessionStorage.setItem("AuthenticateUser", username);
    }

    logout(){
        sessionStorage.removeItem("AuthenticateUser");
    }

    isLoggedInService(){
        let user = sessionStorage.getItem("AuthenticateUser");
        if(user===null) return false;
        return true;
    }
}

export default new Authenticate();
