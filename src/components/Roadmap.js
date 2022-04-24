import React from "react";

export default function Roadmap({ link, header, author }) {
  return (
    <a href={link} target="_blank">
      <div className="tutorial">
        <h5>{header}</h5>
        <p>{author}</p>
      </div>
    </a>
  );
}
