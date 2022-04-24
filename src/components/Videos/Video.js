import React from 'react'

export default function Video({img,link, title}) {
  return (
    <>
          <a href={link} target="_blank">
          <div className="video">
        <span className="video__icon">
          <img src={img} alt={img} />
        </span>
        <h3>{title}</h3>
      </div>
          </a>
    </>
  )
}
