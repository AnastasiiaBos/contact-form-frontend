import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import postForm from "./SendForm";


const ContactForm = () => {

    const { isAuthenticated, user } = useAuth0();

    const [ name, setName ] = useState(user ? user.nickname : ''); 
    // const [ name, setName ] = useState(user?.nickname); //либо
    const [ email, setEmail ] = useState(user ? user.email : ''); 
    // const [ email, setEmail ] = useState(user?.email); //либо
    const [ message, setMessage ] = useState('');

    const [ isModalVisible, setIsModalVisible ] = useState(false); //состояние модального окна


    const formIsSent = () => {
        setIsModalVisible(true);
        setTimeout(() => setIsModalVisible(false), 2000);
    };

    const isEmpty = () => {
        if (name.length <= 0 || email.length <= 0 || message.length <= 0) {
            return true;
        }
        return false;
    }

    return ( 
        isAuthenticated && (
        <form className="form" onSubmit={ (evt) => evt.preventDefault()}>
            <div className="formParts">
                <label>Your name:
                    <input value={name} id="name" placeholder="Your name" required
                    onChange={ (evt) => setName(evt.target.value)}/>
                </label>
            </div>
            <div className="formParts">
                <label >Your email:
                    <input value={email} id="email" placeholder="Your email" required
                    onChange={ (evt) => setEmail(evt.target.value)} />
                </label>
            </div>
            <textarea className="formParts" value={message} name="message" rows="10" placeholder="Your message" required
            onChange={ (evt) => setMessage(evt.target.value)}></textarea>

            <button 
            disabled={ isEmpty() }  
            className={ isEmpty() ? "btn nonActive" : 'btn'}
            onClick={ () => postForm(name, email, message, setMessage, formIsSent)}>Send</button>

            <div className={`${isModalVisible ? "showModal" : "hideModal"} modal`}>
                <p>Thank you! Your form was received.</p>
            </div>
        </form>)
    )
};

export default ContactForm;