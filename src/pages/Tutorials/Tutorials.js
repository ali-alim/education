import Tutorial from "../../components/Tutorial";
import "./tutorials.css"
import mdn_logo from "./../../images/mdn_logo.png"
import react_logo from "./../../images/react_logo.jpg"
import js_logo from "./../../images/js_logo.png"

const tutorial_info = [
    {
        img:mdn_logo,
        header:'Developer Resources',
        paragraph:'HTML, CSS, JavaScript',
        link:'https://developer.mozilla.org/en-US/docs/Learn'
    },
    {
        img:react_logo,
        header:'React Tutorial',
        paragraph:'React JS',
        link:'https://reactjs.org/docs/getting-started.html'
    },
    {
        img:js_logo,
        header:'JavaScript Tutorial',
        paragraph:'Modern JavaScript',
        link:'https://javascript.info/'
    }
]

export default function Tutorials() {
    
  return (
    <>
      <section className="tutorials">
        <h2>ALL TUTORIALS</h2>
        <div className="container tutorials__container">
            {tutorial_info.map((tutorial) => (
                <Tutorial 
                img={tutorial.img}
                header={tutorial.header}
                paragraph={tutorial.paragraph}
                link={tutorial.link}
                />
            ))}
        </div>
      </section>
    </>
  );
}
