import React, { useState } from 'react';
import Header from "../../Header/Header";
import { headerObjTwelve } from "../../Header/HeaderData";
import emailjs from 'emailjs-com';

function ContactUs() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_k09a9zr', 'template_jnt4xjl', e.target, 'user_LNQ71oSuKmHM7YxFtx9jB')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
      }, (error) => {
          console.log(error.text);
          setError(true);
      });
  }

  return (
    <>
      <Header {...headerObjTwelve} />
      <div className="container">
        <br />
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="col-12">
            <label className="form-label">Name</label>
            <input className="form-control" type="text" name="user_name" required />
          </div>
          <div className="col-12">
            <label className="form-label">Email</label>
            <input className="form-control" type="email" name="user_email" required />
          </div>
          <div className="col-12">
            <label className="form-label">Message</label>
            <textarea className="form-control" name="message" required />
          </div>
          <hr />
            <input className="w-100 btn btn-primary btn-lg" type="submit" value="Send" />
        </form>
        <br />
        {success ? (
          <div class="alert alert-success" role="alert">
            Message Sent!
        </div>
        ) : null}
        {error ? (
          <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
        ) : null}
      </div>
    </>
  );
}

export default ContactUs;