import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <h2 className="greetings">Hello, {user.nickname} !</h2>
            <p>Feel free to contact us using this form</p>
            {/* <p>{user.email}</p> */}
            {/* <img src={user.picture} alt={user.name} /> */}
        </div>
        )
    );
};

export default MyAccount;