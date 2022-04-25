import "./videos.css"
import Video from "./Video";
import keyframe_css from "./../../images/keyframe_css.png"
import useEffect from "./../../images/useEffect.png"

const videos_info = [
  {
    title: 'CSS Keyframes Animation Tutorial',
    link: 'https://www.youtube.com/watch?v=K-x_U4jRIO0',
    img: keyframe_css
  },
  {
    title: 'Learn useEffect Hook',
    link: 'https://www.youtube.com/watch?v=UVhIMwHDS7k',
    img: useEffect
  }
]

export default function Videos() {
  return (
    <>
    <section className="videos">
          <h1>All Videos</h1>
        <div className="container videos__container">
        {videos_info.map((video) => (
          <Video title={video.title} link={video.link} img={video.img} />

        ))}

      </div>
      </section>
    </>
  );
}
