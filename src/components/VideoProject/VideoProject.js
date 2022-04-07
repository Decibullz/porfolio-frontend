import React from 'react'
import ReactPlayer from 'react-player/youtube'

const VideoProject = ({
  title,
  builtWith,
  desc,
  desc2,
  image,
  inverted,
  linkUrl,
  gitUrl,
  hostedBy,
}) => {
  return inverted ? (
    <div className="project">
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <h1 className="siteName">{title}</h1>
      </a>
      <div className="site">
        <div className="desc">
          <p>{desc}</p>
          <ul>{builtWith}</ul>
          <p>{desc2}</p>
          <p>
            <a target="_blank" rel="noreferrer" href={gitUrl}>
              View Repo
            </a>
          </p>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={linkUrl}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="project">
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <h1 className="siteName">{title}</h1>
      </a>
      <div className="site">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={linkUrl}
            width="100%"
            height="100%"
          />
        </div>

        <div className="desc">
          <p>{desc}</p>
          <ul>{builtWith}</ul>
          <p>{desc2}</p>
          <p>
            <a target="_blank" rel="noreferrer" href={gitUrl}>
              View Repo
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoProject
