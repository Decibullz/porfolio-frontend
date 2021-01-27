import Contact from "../Contact/Contact"

const Footer = ()=>{
    return(
        <div id="footerDiv">
            <div >
                <div id="tech">
                </div>
                <div id="form">
                    <Contact/>
                </div>
                <div id="socialIcons">
                    <h1 className="icons"><a href="https://www.linkedin.com/in/codysnell/" target='_blank' rel="noreferrer"><i className="fab fa-linkedin fa-lg"></i></a></h1>
                    <h1 className="icons"><a href="https://github.com/Decibullz" target='_blank' rel="noreferrer"><i className="fab fa-github-square fa-lg"></i></a></h1>
                </div>
            </div>
            <footer className="Footer">Copyright &copy; Codys's Portfolio {new Date().getFullYear()} All Rights Reserved</footer>
        </div>
        
    )}

export default Footer