import React from 'react'
import './Projects.css'

function VeronicasLabFinder() {
    return (
        <div>
            <a href='https://veronicas-lab-finder.herokuapp.com/' target='_blank'rel="noreferrer">
                <h1 className='siteName'>Veronica's Lab Finder</h1>
            </a>
            <div className='site'>
                <div className="desc">
                    <p>
                        Lab Test finder website bult using: 
                    </p>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Mongo DB</li>
                    </ul>
                    <p>
                        With this website the user can search either by name or color for a multitude of lab tests, with results showing proper test tube color
                        <br/>
                        Node and Express power both front and back end.
                        <br/>
                        Webite is hosted with Heroku.
                    <br/>
                        <a target='_blank'rel="noreferrer" href="https://github.com/Decibullz/veronicas-lab-finder">Github Repo</a>
                    </p>
                </div>
                <a href='https://veronicas-lab-finder.herokuapp.com/' target='_blank'rel="noreferrer">
                    <img className="siteImage" src="/images/veronicas.png" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default VeronicasLabFinder
