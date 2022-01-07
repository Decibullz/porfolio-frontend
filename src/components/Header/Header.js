import './Header.css'

const Header = () => {
  return (
    <div className="hero-image">
      <img src="/images/banner.jpg" alt="banner image" />
      <div className="header">
        <div className="hero-text-top">
          <h1>Cody Snell</h1>
          <h2>Software Engineer / Website Builder</h2>
        </div>
        <div className="prof">
          <img
            style={{ width: '15%', height: '38%' }}
            src="/images/prof.jpg"
            alt="self"
          />
        </div>
        <div className="hero-text-mid">
          <h3>Available for all your website needs.</h3>
          <h3>
            Email Me:{' '}
            <a href="mailto:codyjsnell@yahoo.com">Codyjsnell@yahoo.com</a>
          </h3>
          <h3>
            Call/Text Me: <a href="tel:361-777-6567">361-777-6567</a>
          </h3>
        </div>
        <div className="hero-text-bottom">
          <h3>
            <i className="fab fa-html5"></i> HTML5 |{' '}
            <i className="fab fa-css3-alt"></i> CSS3 |{' '}
            <i className="fab fa-js-square"></i> Javascript |{' '}
            <i className="fab fa-react"></i> React.js |{' '}
            <i className="fab fa-node"></i> Node.js
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Header
