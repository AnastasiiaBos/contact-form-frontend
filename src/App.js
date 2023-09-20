import './App.css';
import Login from './Login';
import Logout from './Logout';
import { useAuth0 } from "@auth0/auth0-react";
import MyAccount from './MyAccount';
import ContactForm from './ContactForm';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (<h1>Loading ...</h1>);
  } else {
    return (
      <div className="App">
        <Login />
        <Logout />
        <MyAccount />
        <ContactForm />
      </div>
    );
  }
}

export default App;
