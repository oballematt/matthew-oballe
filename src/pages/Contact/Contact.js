import React from 'react'

import styles from './Contact.module.css'
import emailjs from 'emailjs-com'

const Contact = () => {

    const sendEmail = (e) => {
     
        e.preventDefault();
        alert("Message Sent!")
       
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, e.target, process.env.REACT_APP_EMAILJS_USER_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
           
    }
    return (
        <div className={`${styles.container} container-fluid`} id='contact'>
            <br />
            <h1>Contact</h1>
            <p>Email: oballematt@gmail.com</p>
            <p>Phone: 512-971-8374</p>
            <div className='container'>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <br />
                            <input type="text" className="form-control" name="from_name" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-12">
                            <br />
                            <input type="text" className="form-control" name="last_name" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <br />
                        <input type="email" className="form-control" name="email_name" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <br />
                        <textarea className="form-control" name="message" placeholder="Comments" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button value="send" type="submit" className="btn btn-light opacity">Email Me</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
