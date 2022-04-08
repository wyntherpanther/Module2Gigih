const LoginButton = ({ AUTH_ENDPOINT, CLIENT_ID, RESPONSE_TYPE, REDIRECT_URL, SCOPE }) => <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}
    id="button1" className="loginButton">Login</a>
export default LoginButton
