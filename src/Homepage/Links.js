import { Link } from "react-router-dom";
import { datas } from "../components/Data";
export default function Links({navigateHandleClick}) {
  return (
    <div>
      {datas.map((data, index) => {
        return (
          <div key={index}>
            <a
              href={data.link}
              id={data.id}
              className="link_buttons"
              target='_blank'
              rel="noreferrer"
              style={
                !data.text ? { paddingTop: "23px" } : { paddingTop: "13px" }
              }
            >
              {data.name} <br />
              <sub>{data.text}</sub>
            </a>
          </div>
        );
      })}
      <div>
      <Link to={'/contact'}
              id='contact'
              className="link_buttons"
              style={
            { paddingTop: "23px" }
              }>
        Contact Me
      </Link>
     </div>
 
  
      <div className="icons">
        <a href="https://hng9.slack.com">
          <img
            src="./assets/slack.jpg"
            alt="slack-icon"
            className="slack_icon"
          />
        </a>
        <a href="https://github.com/Kaodily">
          <img src="./assets/icon.jpg" alt="github-icon" />
        </a>
      </div>
    </div>
  );
}
