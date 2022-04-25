
export default function ReactNext({ link, img, header, paragraph }) {
  return (
    <>
      <div className="project">
        <div className="project__image">
          <img src={img} alt="react" />
        </div>
        <div className="project__info">
          <h4>{header}</h4>
          <p>
            <b>Technologies used:</b>
            <br />
            {paragraph}
          </p>
          <a href={link} target="_blank" class="btn btn-primary">
            Link to the video
          </a>
        </div>
      </div>
    </>
  );
}
