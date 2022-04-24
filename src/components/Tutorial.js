import React from 'react'

export default function Tutorial({img,link, header, paragraph}) {
  return (
    <a href={link} target="_blank">
        <div className="tutorial">
            <div className="tutorial__top">
            <span className="tutorial__icon">
              <img src={img} alt="mdn_icon" />
            </span>
            <h5>{header}</h5>
            </div>
            <p>{paragraph}</p>
          </div>
        </a>
  )
}
