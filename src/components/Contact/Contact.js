import { useState } from 'react'
import './Contact.css'
import * as emailjs from 'emailjs-com'

const Contact = () => {
  const [email, setEmail] = useState({
    email: '',
  })
  const [message, setMessage] = useState({
    message: '',
  })

  function handleEmailChange(e) {
    setEmail((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  function handleMessageChange(e) {
    setMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitEmail = async (e) => {
    e.preventDefault()
    let templateParams = {
      from_name: email.email,
      to_name: process.env.REACT_APP_EMAIL,
      message: message.message,
    }
    emailjs
      .send(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        templateParams,
        process.env.REACT_APP_USER
      )
      .then(
        setMessage({
          message: '',
        })
      )
      .then(
        window.confirm(
          'Your Email has been sent!\nThank you for your interest!'
        )
      )
  }

  return (
    <div className="container">
      <div>
        <form className="form-horizontal" onSubmit={submitEmail}>
          <fieldset className="fieldset">
            <legend>Contact Me</legend>
            <div className="form-group">
              <div id="envelope" className="col-sm-12">
                <h3>
                  <i className="fas fa-envelope-square fa-lg"></i>
                </h3>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email Address"
                  onChange={handleEmailChange}
                  value={email.email}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div id="pencil" className="col-sm-12">
                <h3>
                  <i className="fas fa-pen-square fa-lg"></i>
                </h3>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Type Your Message Here"
                  value={message.message}
                  onChange={handleMessageChange}
                  required
                />
              </div>
            </div>
            <div>
              <button id="submit" className="btn btn-default" type="submit">
                Send Message
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact
