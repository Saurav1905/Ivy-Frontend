import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
function Landing() {
  return (
    <>
      <div className="Landing__nav">
        <span className="Landing__logo">
          {" "}
          Skill<span className="Landing__track">Track</span>
        </span>
        <Link to="/signin" className="Landing__signin">
          Sign in
        </Link>
        <Link to="/home" className="Landing__start">
          Get Started
        </Link>
      </div>
      <div className="Landing__main">
        <div className="Landing__background">
          <div className="Landing__content">
            <h1>Learing,on the right track</h1>
            <h6>
              The best online resources to learn anything curated in tracks by
              experts.
            </h6>
            <Link to="/home" className="Landing__start">
              Get Started
            </Link>
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
    </>
  );
}

export default Landing;
