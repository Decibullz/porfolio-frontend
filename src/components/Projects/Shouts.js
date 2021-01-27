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
                        Full stack social media app built using:
                    </p>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Google Firebase</li>
                    </ul>
                    <p>
                        With this website the user can signup and interact with any user on the platform.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Shouts


