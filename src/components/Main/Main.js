import KnowledgeCatcher from "../PythonGames/KnowledgeCatcher"
import Pong from "../PythonGames/Pong"
import SpaceIntruders from "../PythonGames/SpaceIntruders"
import "./Main.css"

const Main = ()=>{
    return(
        <div className="projects">

            <div className="python-arcade">
                Here are some Python terminal games I built over one weekend using the python Turtle module, click on image for GitHub link for instructions to play (must have python installed)
                <div>
                    <h4>Pong</h4>
                    <Pong/>
                </div>
                <div>
                    <h4>Knowledge Catcher</h4>
                    <KnowledgeCatcher/>
                </div>
                <div>
                    <h4>Space Intruders</h4>
                    <SpaceIntruders/>
                </div>
            </div>
        </div>
        
    )}

export default Main


