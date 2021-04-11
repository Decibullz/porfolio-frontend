import Project from '../Project/Project.component'
import Python from '../Python/Python'

import './Main.css'
// eslint-disable-next-line
{
  /* 
  Stubbed up project component
  <Project
  title=''
  desc={<p> built using :</p>}
  builtWith={
          <ul>
            <li></li>
            <li></li>
          </ul>
        }
  desc2={<p></p>}
  image='/images/'
  linkUrl=''
  gitUrl=''
  hostedBy=''
  inverted
  /> 

*/
}
const Main = () => {
  return (
    <div className="projects">
      <Project
        title="CRWN CLOTHING"
        desc="Fully Functional E-commerce website built using:"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Google Firebase</li>
            <li>Google OAuth</li>
            <li>Redux</li>
            <li>Stripe's Payment API</li>
          </ul>
        }
        desc2={
          'This E-commerce website is my current project that is still in development. \n Users can sign in with email/password or google, browse through products, shop and checkout using the fake CC numbers listed on the checkout page.'
        }
        image="/images/crwn-clothing.png"
        linkUrl="https://cs-crwn-clothing.herokuapp.com/"
        gitUrl="https://github.com/Decibullz/crown-clothing"
        hostedBy="Heroku"
        inverted
      />
      <hr />
      <Project
        title="Tesla Homepage Clone"
        desc="Tesla's homepage built using :"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Material UI</li>
          </ul>
        }
        desc2={
          <>
            This is a React.JS front-end only clone of{' '}
            <a href="http://tesla.com"> Tesla's</a> homepage.
          </>
        }
        image="/images/tesla-clone.png"
        linkUrl="https://tesla-homepage-copy.herokuapp.com/"
        gitUrl="https://github.com/Decibullz/tesla-clone"
        hostedBy="Heroku"
      />
      <hr />
      <Project
        title="Shouts!"
        desc="Full stack social media website built using:"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>Google Firebase</li>
          </ul>
        }
        desc2={
          'This is a massive full stack social media website where all registered users can interact with each other. \n React powers the front end, Node/Express powers the back end.'
        }
        image="/images/shouts.png"
        linkUrl="https://socialportfolio-155d8.web.app/"
        gitUrl="https://github.com/Decibullz/shouts-frontend"
        hostedBy="Google Firebase"
        inverted
      />
      <hr />
      <Project
        title="Couch Critic"
        desc="Full stack review website built using:"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Ruby on Rails</li>
          </ul>
        }
        desc2={
          'With this website the user can add reviews and rate their favorite movies or TV shows. \n React powers the front end, Ruby on rails powers the backend.'
        }
        image="/images/couch-critic.png"
        linkUrl="https://couch-critic.herokuapp.com/"
        gitUrl="https://github.com/Decibullz/couch-critic-frontend"
        hostedBy="Heroku"
      />
      <hr />
      <Project
        title="Book-It"
        desc="Full stack Book searching website built using:"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>Mongo DB</li>
            <li>New York Times API</li>
            <li>Google books API</li>
          </ul>
        }
        desc2={
          'With this website the user can signup and search books. The homepage shows the top 15 NYT books with Amazon links to buy. \n React powers the front end, Node/Express powers the back end.'
        }
        image="/images/bookit.png"
        linkUrl="https://blooming-cove-90440.herokuapp.com/"
        gitUrl="https://github.com/Decibullz/Book-it-frontend"
        hostedBy="Heroku"
        inverted
      />
      <hr />
      <Project
        title="Veronica's Lab Finder"
        desc="Lab Test finder website built using:"
        builtWith={
          <ul>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>Mongo DB</li>
          </ul>
        }
        desc2={
          'With this website the user can search either by name or color for a multitude of lab tests, with results showing proper test tube color \n Node and Express power the front end with MongoDB serving the database'
        }
        image="/images/veronicas.png"
        linkUrl="https://veronicas-lab-finder.herokuapp.com/"
        gitUrl="https://github.com/Decibullz/veronicas-lab-finder"
        hostedBy="Heroku"
      />

      <hr />
      <Python />
      <hr />
    </div>
  )
}

export default Main
