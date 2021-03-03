import React from 'react'

import styles from './ContactForm.module.css'

const contactForm = (props) => {
    return (
        <div className={`${styles.container} container-fluid`} id='contact'>
            <br />
            <h1>Contact</h1>
            <p>Email: oballematt@gmail.com</p>
            <p>Phone: 512-971-8374</p>
            <div className='container'>
                <form className="contact-form" onSubmit={props.send}>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <br />
                            <input type="text" className="form-control" value={props.values1} onChange={props.change} name="from_name" placeholder="First Name" />
                        </div>
                        <div className='text-danger'>{props.errorFirst}</div>
                        <div className="form-group col-md-12">
                            <br />
                            <input type="text" className="form-control" value={props.values2} onChange={props.change} name="last_name" placeholder="Last Name" />
                        </div>
                        <div className='text-danger'>{props.errorLast}</div>

                        <div className="form-group col-md-12">
                            <br />
                            <input type="email" className="form-control" value={props.values3} onChange={props.change} name="email_name" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className='text-danger'>{props.errorEmail}</div>
                        <div className="form-group col-md-12">
                            <br />
                            <textarea className="form-control" name="message" value={props.values4} onChange={props.change} placeholder="Comments" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className='text-danger'>{props.errorMessage}</div>
                    </div>
                    <button onClick={props.clicked} value="send" type="submit" className="btn btn-light opacity">Email Me</button>
                </form>
            </div>
        </div>
    )
}

export default contactForm
