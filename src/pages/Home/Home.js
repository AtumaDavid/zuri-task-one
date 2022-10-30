import React from "react";
import "./Home.css";
import slack from "../../assets/slack.svg";
import github from "../../assets/github.svg";
import zuri from "../../assets/zuri.svg";
import ingressive from "../../assets/ingressive.svg";
import shareBig from "../../assets/shareBig.svg";
import shareSmall from "../../assets/shareSmall.svg";

const Home = () => {
  return (
    <div className="container">
      <div>
        <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U">
          <img src={shareBig} className="share-icon" alt="share" />
        </a>
      </div>
      <div>
        <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U">
          <img src={shareSmall} className="share-iconn" alt="share" />
        </a>
      </div>
      <div className="profile">
        <img
          src="https://images.pexels.com/photos/1322444/pexels-photo-1322444.jpeg?cs=srgb&dl=pexels-zahaoha-1322444.jpg&fm=jpg"
          alt=""
          className="profile-img"
        />
        <h1>d_atuma</h1>
        <h1 className="slack-username">David Atuma</h1>
      </div>

      {/* link buttons */}
      <a href="https://twitter.com/home">
        <div className="btn">
          <button>
            <h2>Twitter Link</h2>
          </button>
        </div>
      </a>
      <a href="https://training.zuri.team/">
        <div className="btn">
          <button>
            <h2>Zuri Team</h2>
          </button>
        </div>
      </a>
      <a href="http://books.zuri.team/">
        <div className="btn">
          <button>
            <h2>Zuri Books</h2>
          </button>
        </div>
      </a>
      <a href="https://books.zuri.team/">
        <div className="btn">
          <button>
            <h2>Python Books</h2>
          </button>
        </div>
      </a>
      <a href="https://background.zuri.team/">
        <div className="btn">
          <button>
            <h2>Background Check for Coders</h2>
          </button>
        </div>
      </a>
      <a href="https://books.zuri.team/design-rules ">
        <div className="btn">
          <button>
            <h2>Design Books</h2>
          </button>
        </div>
      </a>

      {/* logos */}
      <div className="logo">
        <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U">
          <img src={slack} alt="slack" className="" />
        </a>
        <a href="https://github.com/AtumaDavid/zuri-task-one">
          <img src={github} alt="github" />
        </a>
      </div>
      <hr />
      {/* footer */}
      <footer className="">
        <div className="zuri">
          <img src={zuri} alt="zuri" />
        </div>
        <div>
          <h5>HNG internship 9 Frontend Task</h5>
        </div>
        <div className="ingressive">
          <img src={ingressive} alt="I4G" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
