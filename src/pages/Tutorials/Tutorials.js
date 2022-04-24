import Tutorial from "../../components/Tutorial";
import mdn_logo from "./../../images/mdn_logo.png"
import "./tutorials.css"

const tutorial_info = [
    {img:mdn_logo,
        header:'Developer Resources',
        paragraph:'HTML, CSS, JavaScript',
        link:'https://developer.mozilla.org/en-US/docs/Learn'
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
