import React from 'react'
import './Projects.css'

function BookIt() {
    return (
        <div>
            <a href='https://blooming-cove-90440.herokuapp.com/' target='_blank'rel="noreferrer">
                <h1 className='siteName'>Book-It</h1>
            </a>
            <div className='site'>
                <a href='https://blooming-cove-90440.herokuapp.com/' target='_blank'rel="noreferrer">
                    <img className="siteImage" src="/images/bookit.png" alt=""/>
                </a>
                <div className="desc">
                    <p>
                        Full stack Book searching website built using:
                    </p>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Mongo DB</li>
                        <li>New York Times API</li>
                        <li>Google books API</li>
                    </ul>
                    <p>
                        With this website the user can signup and search books. The homepage shows the top 15 NYT books with Amazon links to buy.
                        <br/>
                        React powers the front end, Node/Express powers the back end.
                        <br/>
                        Website is hosted with Heroku.
                        <br/>
                        <a target='_blank'rel="noreferrer" href="https://github.com/Decibullz/Book-it-frontend">Github Repo</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookIt
