import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();



    return ( 
        !isAuthenticated && (
        <div className="wrapper">
            <h2 className="loginHeader">If tou want to contact with us,<br /> please log in to your account</h2>
            <button  className="btn logBtn" onClick={() => loginWithRedirect()}>LOG IN</button>
        </div>) //1 способ
        // !isAuthenticated ? <button onClick={() => loginWithRedirect()}>LOG IN</button> : null //2 способ
    )
    

    // 3 способ
    // if (!isAuthenticated) {
    //     return (<button onClick={() => loginWithRedirect()}>LOG IN</button>
    //     // !isAuthenticated ? <button onClick={() => loginWithRedirect()}>LOG IN</button> : null
    // )}     
};

export default Login;
