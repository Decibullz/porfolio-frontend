import React from 'react'
import KnowledgeCatcher from './PythonGames/KnowledgeCatcher'
import Pong from './PythonGames/Pong'
import SpaceIntruders from './PythonGames/SpaceIntruders'

const Python = ()=> {
        return (
            <div>
                <h5>
                Here are some Python terminal games built using the Turtle module, click on image for GitHub link for instructions to play (must have python installed)
                </h5>
                <div className="python-arcade">
                    <Pong/>
                    <KnowledgeCatcher/>
                    <SpaceIntruders/>
                </div>
            </div>
        )
    }


export default Python