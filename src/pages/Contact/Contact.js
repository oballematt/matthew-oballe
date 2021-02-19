import React, { useState } from 'react'

import styles from './Contact.module.css'
import emailjs from 'emailjs-com'
import Modal from '../../components/UI/Modal/Modal'
import Icon from '../../components/Icon/Icon'
import ContactForm from './ContactForm/ContactForm'

const initialValues = {
    from_name: '',
    last_name: '',
    email_name: '',
    message: ''
}

const Contact = () => {
    const [show, setShow] = useState(false)
    const [values, setValues] = useState(initialValues)

    const openModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false)
        setValues(initialValues)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, e.target, process.env.REACT_APP_EMAILJS_USER_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <>
            <Modal color='green' closed={closeModal} show={show}>
                <div className={styles.row}>
                    <Icon icon='far fa-check-circle fa-5x' />
                    <h1>Message Sent</h1>
                </div>
                <hr />
            </Modal>
            <ContactForm
                send={sendEmail}
                values1={values.from_name}
                values2={values.last_name}
                values3={values.email_name}
                values4={values.message}
                change={handleInputChange}
                clicked={openModal} />
        </>
    )
}

export default Contact
