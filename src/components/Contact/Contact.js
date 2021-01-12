import {useState} from 'react'
import './Contact.css'


const Contact = (props)=>{

    const [emailState, setEmailState]= useState({
        email: ''
    })
    const [message, setMessage]= useState({
        message: ''
    })


    
    function handleEmailChange(e){
        setEmailState(prevState => ({
            ...prevState,   
            [e.target.name]: e.target.value
        }))
    }

    function handleMessageChange(e){
        setMessage(prevState =>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // fetch: 'http://localhost:3001/send'
    const submitEmail = async (e)=>{
        e.preventDefault()
        console.log({emailState, message})
        await fetch('https://cody-snell-mailer.herokuapp.com/send', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({emailState, message})
        }).then(res => res.json())
    }
    

    return(
        <div className="container">
            <div>
                <form className="form-horizontal" onSubmit={submitEmail}>
                    <fieldset className="fieldset">
                    <legend>Contact Me</legend>
                    <div className="form-group">
                    <div id="envelope" className="col-sm-12">
                        <h3><i className="fas fa-envelope-square fa-lg"></i></h3>
                        <input 
                        type='text'
                        name='email'
                        placeholder='Email Address'
                        onChange={handleEmailChange}
                        value={emailState.email}
                        required
                        />
                    </div>
                    </div>
                    <div className="form-group">
                    <div id="pencil" className="col-sm-12">
                        <h3><i className="fas fa-pen-square fa-lg"></i></h3>
                        <textarea
                        name='message'
                        type='text'
                        placeholder="Type Your Message Here"
                        value={message.message}
                        onChange={handleMessageChange}
                        required
                        />
                    </div>
                    </div>
                    <div>
                        <button id="submit" className="btn btn-default" type='submit'>Send Message
                        </button>
                    </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}


export default Contact