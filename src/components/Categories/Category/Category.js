import {Outlet, Link} from "react-router-dom"

export default function Category({header,paragraph,img,name}) {
  return (
    <div>
        <Link to={name}>
        <div className="category">
        <span className="category__icon">
          <img src={img} alt={img} /> 
          <i>{name}</i>
        </span>
        <h5>{header}</h5>
        <p>{paragraph}</p>
      </div>
        </Link>
    </div>
  );
}
