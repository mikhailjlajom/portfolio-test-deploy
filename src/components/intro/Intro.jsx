import "./intro.scss"
import Typewriter from 'typewriter-effect';

export default function Intro() {


  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="/public/assets/betterme.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Mikhail J. Abaya Lajom</h1>
          <h3>Software Engineer
            <span>
              <Typewriter

                options={{
                  strings: ["Full-Stack", "React.Js", "Node.Js"],
                  autoStart: true,
                  delay: 75,
                  loop: true
                }}

              />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}
