import "./videos.css"
import Video from "./Video";
import keyframe_css from "./../../images/keyframe_css.png"
import useEffect from "./../../images/useEffect.png"
import apis from "./../../images/apis.png"
import dapp_uni_1 from "./../../images/dapp_uni_1.png"
import dapp_uni_2 from "./../../images/dapp_uni_2.png"
import vacancy_yandex from "./../../images/vacancy_yandex.png"
import tailwind from "./../../images/tailwind.png"
import reactin2hours from "./../../images/reactin2hours.png"
import jscrashcourse from "./../../images/jscrashcourse.png"


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
  },
  {
    title: 'How to use APIs',
    link: 'https://www.youtube.com/watch?v=dfaj4vI8QxE',
    img: apis
  },
  {
    title: 'How I would learn blockchain if I had to start over',
    link: 'https://www.youtube.com/watch?v=YrHCD7nx29o',
    img: dapp_uni_2
  },
  {
    title: 'How to Make $100k/year as a Blockchain Developer',
    link: 'https://www.youtube.com/watch?v=tCcXZWg5nPo',
    img: dapp_uni_1
  },
  {
    title: 'Собеседование Junior Frontend | Яндекс | React',
    link: 'https://www.youtube.com/watch?v=ym9oz93RClM',
    img: vacancy_yandex
  },
  {
    title: 'Tailwind Crash Course | Project From Scratch',
    link: 'https://www.youtube.com/watch?v=dFgzHOX84xQ',
    img: tailwind
  },
  {
    title: 'React Project Crash Course',
    link: 'https://www.youtube.com/watch?v=0riHps91AzE',
    img: reactin2hours
  },
  {
    title: 'JavaScript Crash Course',
    link: 'https://www.youtube.com/watch?v=g7T23Xzys-A&list=WL&index=12',
    img: jscrashcourse
  },
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
