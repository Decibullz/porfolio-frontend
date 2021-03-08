import React from 'react'

const TeslaClone = () => {
  return (
    <div>
      <a
        href="https://tesla-homepage-copy.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="siteName">Tesla Homepage Clone</h1>
      </a>
      <div className="site">
        <div className="desc">
          <p>Tesla's homepage built using :</p>
          <ul>
            <li>React.js</li>
            <li>Material UI</li>
          </ul>
          <p>
            This is a React clone of <a href="http://tesla.com"> Tesla's</a>{' '}
            homepage.
            <br />
            <br />
            Webite is hosted with Heroku.
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Decibullz/tesla-clone"
            >
              Github Repo
            </a>
          </p>
        </div>
        <a
          href="https://tesla-homepage-copy.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="siteImage" src="/images/tesla-clone.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default TeslaClone
