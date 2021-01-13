import './Header.css'

const Header = ()=>{
    return(
        <div className="hero-image">
            <img src="/images/banner.jpg" alt=""/>
            <div className="hero-text-top">
                <h1>Software Developer Cody Snell</h1>
                </div>
            <div className="prof">
            <img src="/images/prof.jpg" alt="self"/>
            </div>
            <div className="hero-text-mid">
                <h3>Fullstack Developer based in Victoria, Tx.</h3>
                <h3>Available for all your website needs.</h3>
                <h3>Email Me: <a href="mailto:codyjsnell@yahoo.com">Codyjsnell@yahoo.com</a></h3>
                <h3>Call Me: <a href="tel:361-777-6567">361-777-6567</a></h3>
            </div>
            <div className="hero-text-bottom">
                <h5>Technologies I use</h5>
                <h6>| HTML5 | CSS3 | Javascript | jQuery | Git | AJAX | Node.js | Express | MongoDb | Mongoose | Ruby on Rails | Bootstrap | React.js | Heroku | Postman | PostgreSQL | Python |</h6>
            </div>
        </div>
    )
}

export default Header