import React from 'react'
import './Projects.css'

function CouchCritic() {
    return (
        <div>
            <a href='https://couch-critic.herokuapp.com/' target='_blank'rel="noreferrer">
                <h1 className='siteName'>Couch Critic</h1>
            </a>
            <div className='site'>
                <div className="desc">
                    <p>
                        Full stack review website built using:
                    </p>
                    <ul>
                        <li>React.js</li>
                        <li>Ruby on Rails</li>
                    </ul>
                    <p>
                        With this website the user can add reviews and rate their favorite movies or TV shows.
                        <br/>
                        React powers the front end, Ruby on rails powers the backend.
                        <br/>
                        Webite is hosted with Heroku.
                        <br/>
                        <a target='_blank'rel="noreferrer" href="https://github.com/Decibullz/couch-critic-frontend">Github Repo</a>
                    </p>
                </div>
                <a href='https://couch-critic.herokuapp.com/' target='_blank'rel="noreferrer">
                    <img className="siteImage" src="/images/couch-critic.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default CouchCritic
