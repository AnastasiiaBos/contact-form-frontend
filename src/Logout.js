import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();


    return (
        isAuthenticated && (
            <div>
                <button className="btn logBtn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LOG OUT</button>
            </div>
        )
        
    );
};
export default Logout;