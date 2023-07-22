import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contactme.css';

function Contactme(props) {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wo1kije', 'template_19vdx6m', form.current, 'iBYhqT4UJAXbXb877')
      .then((result) => {
        console.log(result.text);
        setIsEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    setIsEmailSent(false);
  };

  return (
    <div className='contactContainer'>
      {isEmailSent ? (
        <div className='confirmationMessage'>
          <p>Email sent successfully! ✅</p>
          <button className="sendButtonAgain" onClick={resetForm}>Send another email</button>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <h1 id='contactmeTitle' className='title'>Get in touch with me:</h1>
          <div id='inputContainer'>
            <label className='contactLabel' id='nameForm'>Name</label>
            <input className='contactInput' id='nameFormInput' type='text' name='user_name' />
            <label className='contactLabel' id='emailForm'>Email</label>
            <input className='contactInput' id='emailFormInput' type='email' name='user_email' />
            <label className='contactLabel' id='messageForm'>Message</label>
            <textarea className='contactInput' id='messageFormInput' name='message' />
            <input id='sendMessage' type='submit' value='Send' className='sendButton' />
          </div>
        </form>
      )}
    </div>
  );
}

export default Contactme;