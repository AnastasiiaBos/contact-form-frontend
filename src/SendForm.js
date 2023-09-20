import axios from "axios";
const myURL = "https://contact-form-gwdw.onrender.com";

const postForm = (name, email, message, setMessage, formIsSent) => {
    axios.post(`${myURL}/form-submitted`, {name, email, message})
    .then( (data) => {
        setMessage("");
        formIsSent();
    })
    .catch((error) => { 
        if (error.response) { // status code out of the range of 2xx
          console.log("Data :" , error.response.data);
          console.log("Status :" + error.response.status);
        } else if (error.request) { // The request was made but no response was received
          console.log(error.request);
        } else {// Error on setting up the request
          console.log('Error', error.message);
        }
      });
};

export default postForm;