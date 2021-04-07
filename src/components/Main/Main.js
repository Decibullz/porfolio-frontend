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
        desc={<p> Fully Functional E-commerce website built using:</p>}
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
          <p>
            This E-commerce website is my current project that is still in
            development.
            <br />
            Users can sign in with email/password or google, browse through
            products, shop and checkout using the fake CC numbers listed on the
            checkout page.
          </p>
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
        desc={<p>Tesla's homepage built using :</p>}
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Material UI</li>
          </ul>
        }
        desc2={
          <p>
            This is a React.JS front-end only clone of{' '}
            <a href="http://tesla.com"> Tesla's</a> homepage.
          </p>
        }
        image="/images/tesla-clone.png"
        linkUrl="https://tesla-homepage-copy.herokuapp.com/"
        gitUrl="https://github.com/Decibullz/tesla-clone"
        hostedBy="Heroku"
      />
      <hr />
      <Project
        title="Shouts!"
        desc={<p> Full stack social media website built using:</p>}
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>Google Firebase</li>
          </ul>
        }
        desc2={
          <p>
            This is a massive full stack social media website where all
            registered users can interact with each other.
            <br />
            React powers the front end, Node/Express powers the back end.
          </p>
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
        desc={<p>Full stack review website built using:</p>}
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Ruby on Rails</li>
          </ul>
        }
        desc2={
          <p>
            With this website the user can add reviews and rate their favorite
            movies or TV shows.
            <br />
            React powers the front end, Ruby on rails powers the backend.
            <br />
          </p>
        }
        image="/images/couch-critic.png"
        linkUrl="https://couch-critic.herokuapp.com/"
        gitUrl="https://github.com/Decibullz/couch-critic-frontend"
        hostedBy="Heroku"
      />
      <hr />
      <Project
        title="Book-It"
        desc={<p>Full stack Book searching website built using:</p>}
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
          <p>
            With this website the user can signup and search books. The homepage
            shows the top 15 NYT books with Amazon links to buy.
            <br />
            React powers the front end, Node/Express powers the back end.
            <br />
          </p>
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
        desc={<p>Lab Test finder website built using: </p>}
        builtWith={
          <ul>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>Mongo DB</li>
          </ul>
        }
        desc2={
          <p>
            {' '}
            With this website the user can search either by name or color for a
            multitude of lab tests, with results showing proper test tube color
            <br />
            Node and Express power both front and back end.
            <br />
          </p>
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
