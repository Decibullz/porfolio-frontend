import './Header.css'

const Header = ()=>{
    return(
        <div className="hero-image">
            <img src="/images/banner.jpg" alt=""/>
            <div className="hero-text-top">
                <h1>Software Developer Cody Snell</h1>
                </div>
            <div className="prof">
            <img src="/images/prof.jpeg" alt="self"/>
            </div>
            <div className="hero-text-mid">
                <h3>Fullstack Developer based in Victoria, Tx.</h3>
                <h3>Available for all your website needs.</h3>
                <h3>Email Me: <a href="mailto:codyjsnell@yahoo.com">Codyjsnell@yahoo.com</a></h3>
                <h3>Call Me: <a href="tel:361-777-6567">361-777-6567</a></h3>
            </div>
            <div className="hero-text-bottom">
                <h3>
                    <i class="fab fa-html5"></i> HTML5 | <i class="fab fa-css3-alt"></i> CSS3 | <i class="fab fa-js-square"></i> Javascript | <i class="fab fa-react"></i> React.js | <i class="fab fa-node"></i> Node.js | <i class="fab fa-python"></i> Python | <i class="fas fa-gem"></i> Ruby on Rails 
                </h3>
            </div>
        </div>
    )
}

export default Header