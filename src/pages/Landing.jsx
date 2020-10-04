import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import { Avatar } from "@material-ui/core";
import AuthContext from "../contexts/auth/AuthContext";
import GlobalRoadmap from "../components/GlobalRoadmap";
function Landing() {
  const { setLoginModalOpen, user, setRegisterModalOpen } = useContext(
    AuthContext
  );
  return (
    <>
      <div className="Landing__nav">
        <span className="Landing__logo">
          {" "}
          Skill<span className="Landing__track">Track</span>
        </span>
        <Link
          onClick={() => setLoginModalOpen(true)}
          className="Landing__signin"
        >
          Sign in
        </Link>
        {user ? (
          <Link to="/track/browse" className="Landing__start">
            Get Started
          </Link>
        ) : (
          <Link
            onClick={() => setRegisterModalOpen(true)}
            className="Landing__start"
          >
            Get Started
          </Link>
        )}
      </div>
      <div className="Landing__main">
        <div className="Landing__background">
          <div className="Landing__content">
            <h1>Learing,on the right track</h1>
            <h6>
              The best online resources to learn anything curated in tracks by
              experts.
            </h6>
            {user ? (
              <Link to="/track/browse" className="Landing__start">
                Get Started
              </Link>
            ) : (
              <Link
                onClick={() => setRegisterModalOpen(true)}
                className="Landing__start"
              >
                Get Started
              </Link>
            )}
            <div
              style={{ marginTop: 15, display: "flex", position: "relative" }}
            >
              <Avatar style={{}} src="https://picsum.photos/200?random=1" />
              <Avatar style={{}} src="https://picsum.photos/200?random=2" />
              <Avatar style={{}} src="https://picsum.photos/200?random=3" />
            </div>
            <span
              style={{
                color: "#4F596A",
                fontWeight: "normal",
              }}
            >
              Join over <span style={{ color: "purple" }}>4000+</span> students
            </span>
          </div>
          <div className="Landing__box">
            <span className="Landing__decor">
              <CheckIcon style={{ fontSize: 20 }} className="Landing__tick" />
            </span>
            <span className="Landing__decor">
              <CheckIcon style={{ fontSize: 20 }} className="Landing__tick" />
            </span>
            <span className="Landing__decor Landing__innerdecor">
              <CheckIcon
                style={{ fontSize: 20 }}
                className="Landing__tick Landing__ticktrans"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="Landing__counter">
        <span className="Landing__count">
          <h1>939</h1>
          <p>Track</p>
        </span>
        <span className="Landing__count">
          <h1>939</h1>
          <p>Track</p>
        </span>
        <span className="Landing__count Landing__countthird">
          <h1>939</h1>
          <p>Track</p>
        </span>
        <span className="Landing__patch"></span>
      </div>
      <div className="Landing__features">
        <h1>Feature Skilltracks</h1>
        <p>
          Below are some of our most popular tracks. Each track is curated by an
          expert and includes resources they used to gain mastery over their
          skills.
        </p>
        <span className="Landing__patchright"></span>
      </div>
      <div
        className="browse__roadmaps"
        style={{
          marginLeft: "10vw",
        }}
      >
        <GlobalRoadmap
          title="Data Science Track"
          description="Follow the path Adel took to become a senior UX designer at Facebook."
          username="Adel Khan"
          usertitle="UX Designer, Facebook"
        />
        <GlobalRoadmap
          title="Data Science Track"
          description="Follow the path Adel took to become a senior UX designer at Facebook."
          username="Adel Khan"
          usertitle="UX Designer, Facebook"
        />
        <GlobalRoadmap
          title="Data Science Track"
          description="Follow the path Adel took to become a senior UX designer at Facebook."
          username="Adel Khan"
          usertitle="UX Designer, Facebook"
        />
      </div>
      <div className="Landing__create">
        <span className="Landing__createtext">
          <h1>Create your own skilltracks.</h1>
          <p>
            Blaze your own trail and curate the best resources to learn a skill
            you’ve mastered. Your personal tracks allow you to maintain a record
            of what you’re learning.
          </p>
        </span>
        <span className="Landing__Man"></span>
      </div>
      <div className="Landing__howitworks">
        <h1>How it works</h1>
        <div className="Landing__bullets">
          <div className="Landing__bullet">
            <span className="Landing__bulletcircle"></span>
            <h1>
              Create tracks for any skill by collecting the best available
              resources on the Internet for learning it.
            </h1>
          </div>
          <div
            style={{
              marginTop: 60,
            }}
            className="Landing__bullet"
          >
            <span className="Landing__bulletcircle"></span>
            <h1>Create brand new tracks by forking existing ones.</h1>
          </div>
          <div
            style={{
              marginTop: 80,
            }}
            className="Landing__bullet"
          >
            <span className="Landing__bulletcircle"></span>
            <h1>
              Maintain a record of everything you’re learning and where to find
              it.
            </h1>
          </div>
        </div>
      </div>
      <div className="Landing__bottom">
        <h1>What’re you waiting for?</h1>
        <Link to="/home" className="Landing__start">
          Get Started
        </Link>
      </div>
    </>
  );
}

export default Landing;
