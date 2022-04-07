import Project from '../Project/Project.component'
import Python from '../Python/Python'
import './Main.css'
import VideoProject from '../VideoProject/VideoProject'
// eslint-disable-next-line
{
  /* 
  Stubbed up project component
  <Project
  title=''
  desc= 'built using :'
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
  <hr/>

*/
}
const Main = () => {
  return (
    <div className="projects">
      <VideoProject
        title="Spotify Remote"
        desc="Functional Spotify remote built using:"
        builtWith={
          <ul>
            <li>Next.JS</li>
            <li>Spotify's offical API</li>
            <li>Tailwind Css</li>
            <li>Recoil</li>
          </ul>
        }
        desc2={
          "This app allows you to control your Spotify account using Spotify's offical API"
        }
        linkUrl="https://youtu.be/_bFN2wlK2Bc"
        gitUrl="https://github.com/Decibullz/spotify-nextJS-clone"
        inverted
      />
      <hr />
      <Project
        title="CRWN CLOTHING"
        desc="Fully Functional E-commerce website built using:"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Redux</li>
            <li>Google Firebase</li>
            <li>Google OAuth</li>
            <li>Stripe's Payment API</li>
          </ul>
        }
        desc2={
          'With this full E-commerce site users can sign in with email/password or google, browse through products, shop and checkout using the fake CC numbers listed on the checkout page.'
        }
        image="/images/crwn-clothing.jpg"
        linkUrl="https://cscrwnclothing.netlify.app/"
        gitUrl="https://github.com/Decibullz/crown-clothing"
        hostedBy="Netlify"
      />
      <hr />
      <Project
        title="Linkedin Clone"
        desc="React Linkedin Clone built using :"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Redux</li>
            <li>Google Firebase</li>
            <li>Styled Components</li>
          </ul>
        }
        desc2={
          'With this mobile-friendly clone of Linkedin users can sign in using google OAuth integration and posts articles. The feed loads in real time for all users.'
        }
        image="/images/linkedin-clone.jpg"
        linkUrl="https://linkedin-clone-6de76.firebaseapp.com/"
        gitUrl="https://github.com/Decibullz/LinkedIn-Clone"
        hostedBy="Google Firebase"
        inverted
      />
      <hr />
      <Project
        title="React Tesla Homepage Clone"
        desc="Tesla's homepage built using :"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Material UI</li>
          </ul>
        }
        desc2={
          <>
            This is a clone of <a href="http://tesla.com"> Tesla's</a> homepage
            built using only React.
          </>
        }
        image="/images/tesla-clone.jpg"
        linkUrl="https://csteslaclone.netlify.app/"
        gitUrl="https://github.com/Decibullz/tesla-clone"
        hostedBy="Netlify"
      />
      <hr />
      <Project
        title="Shouts!"
        desc="Full stack social media website built using:"
        builtWith={
          <ul>
            <li>React.JS</li>
            <li>Redux</li>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>Google Firebase</li>
          </ul>
        }
        desc2={
          'This is a massive full stack social media website where all registered users can interact with each other. \n React powers the front end, Node/Express powers the back end.'
        }
        image="/images/shouts.jpg"
        linkUrl="https://socialportfolio-155d8.web.app"
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
            <li>PostgreSql</li>
          </ul>
        }
        desc2={
          'With this website the user can add reviews and rate their favorite movies or TV shows. \n React powers the front end, Ruby on rails powers the backend.'
        }
        image="/images/couch-critic.jpg"
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
        image="/images/bookit.jpg"
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
        image="/images/veronicas.jpg"
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
