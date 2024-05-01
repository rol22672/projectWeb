export const getToken = () => {
    let token  = localStorage.getItem('token');

    token = token.replaceAll("\"","")

    return token;
};