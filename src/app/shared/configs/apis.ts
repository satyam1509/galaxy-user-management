let host = "https://ai-lab-backend.herokuapp.com/"

export default {

    auth: {
        login: host + "api/v1/auth/login",
        signUp: host + "api/v1/auth/signup",
        changePassword: host +'api/v1/auth/reset-password'
    },

}