import React from 'react'
import './Projects.css'

function Shouts() {
    return (
        <div>
            <a href='https://socialportfolio-155d8.web.app/' target='_blank'rel="noreferrer">
                <h1 className='siteName'>Shouts!</h1>
            </a>
            <div className='site'>
                <a href='https://socialportfolio-155d8.web.app/' target='_blank'rel="noreferrer">
                    <img className="siteImage" src="/images/shouts.png" alt=""/>
                </a>
                <div className="desc">
                    <p>
                        Full stack social media website built using:
                    </p>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Google Firebase</li>
                    </ul>
                    <p>
                        With this website the user can signup and interact with any user on the platform.
                        <br/>
                        React powers the front end, Node/Express powers the back end.
                        <br/>
                        Website is hosted with Google firebase.
                        <br/>
                        <a target='_blank'rel="noreferrer" href="https://github.com/Decibullz/shouts-frontend">Github Repo</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Shouts


