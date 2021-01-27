
import BookIt from "../Projects/BookIt"
import CouchCritic from "../Projects/CouchCritic"
import FindYourWiki from "../Projects/FindYourWiki"
import Shouts from "../Projects/Shouts"
import VeronicasLabFinder from "../Projects/VeronicasLabFinder"
import Python from "../Python/Python"
import "./Main.css"

const Main = ()=>{
    return(
        <div className="projects">
            <Shouts/>
            <hr/>
            <CouchCritic/>
            <hr/>
            <BookIt/>
            <hr/>
            <VeronicasLabFinder/>
            <hr/>
            <FindYourWiki/>
            <hr/>
            <Python/>
            <hr/>
        </div>
        
    )}

export default Main


