import React from 'react'
import './Projects.css'

function FindYourWiki() {
    return (
        <div>
            <a href='https://decibullz.github.io/Find-your-wiki/' target='_blank'rel="noreferrer">
                <h1 className='siteName'>Find Your New Wiki</h1>
            </a>
            <div className='site'>
                <a href='https://decibullz.github.io/Find-your-wiki/' target='_blank'rel="noreferrer">
                    <img className="siteImage" src="/images/find-your-wiki.png" alt=""/>
                </a>
                <div className="desc">
                    <p>
                        Front end website built connecting to the WIKIA API
                    </p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                    </ul>
                    <p>
                        With this website the user can search for almost any interest of theirs and get a result of WIKIS related to their interest
                        <br/>
                        Basic HTML, CSS, and JS power the front end, WIKIA API powers the backend.
                        <br/>
                        Website is hosted with Github Pages.
                        <br/>
                        <a target='_blank'rel="noreferrer" href="https://github.com/Decibullz/Find-your-wiki">Github Repo</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FindYourWiki
