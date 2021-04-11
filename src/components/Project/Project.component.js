import React from 'react'

const Project = ({
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
    <div>
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <h1 className="siteName">{title}</h1>
      </a>
      <div className="site">
        <div className="desc">
          <p>{desc}</p>
          <ul>{builtWith}</ul>
          <p>
            <br />
            {desc2}
          </p>
          <p>
            Website is hosted with {hostedBy} <br />
            <a target="_blank" rel="noreferrer" href={gitUrl}>
              Github Repo
            </a>
          </p>
        </div>
        <a href={linkUrl} target="_blank" rel="noreferrer">
          <img className="siteImage" src={image} alt="" />
        </a>
      </div>
    </div>
  ) : (
    <div>
      <a href={linkUrl} target="_blank" rel="noreferrer">
        <h1 className="siteName">{title}</h1>
      </a>
      <div className="site">
        <a href={linkUrl} target="_blank" rel="noreferrer">
          <img className="siteImage" src={image} alt="" />
        </a>
        <div className="desc">
          <p>{desc}</p>
          <ul>{builtWith}</ul>
          <p>
            <br />
            {desc2}
          </p>
          <p>
            Website is hosted with {hostedBy} <br />
            <a target="_blank" rel="noreferrer" href={gitUrl}>
              Github Repo
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Project
