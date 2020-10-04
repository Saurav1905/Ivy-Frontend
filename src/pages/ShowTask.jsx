import React from "react";
import MytracksTop from "../components/MytracksTop";
function ShowTask() {
  return (
    <div>
      <MytracksTop />
      <div className="Task__bg">
        <div className="Show__top">
          <h1>UX Design Track</h1>
        </div>
        <div
          style={{
            display: "flex",
          }}
          className="Show__bodycontainer"
        >
          <div
            className="Show__body"
            style={{
              background: "#F2F2F2",
              borderRadius: 20,
              height: "67.49654218533887vh",
              width: " 39.17112299465241vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2vh",
              marginTop: "2vh",
            }}
          >
            <h1
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: 24,
                lineHeight: 2,
              }}
            >
              Design Fundamentals
            </h1>
            <p
              style={{
                fontFamily: "Montserrat",
                fontWeight: 400,
                fontSize: 18,
                marginTop: 20,
                width: "80%",
              }}
            >
              Whenever we want to get into uncharted territory or novel career
              paths, the first thing one should do is to familiarize ourselves
              with the vocabulary of that domain. When I started it, there was
              this one course that helped me with the familiarization. IDF
              Design Fundamentals course. It has a comprehensive structure that
              introduces you to the design terms and gives you a fair
              understanding of what’s inside.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2vh",
              marginTop: "2vh",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            className="Show__links"
          >
            <div className="Show__taskdetail">
              <h3>Tasks</h3>
              <ul
                style={{
                  marginTop: 10,
                }}
              >
                <li>
                  {" "}
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    href="#"
                  >
                    Finish the IDF Design Fundamentals course
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="Show__extramaterial">
              <h3>Extra Reading Material</h3>
              <ul
                style={{
                  marginTop: 10,
                }}
              >
                <li>
                  {" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    The Design of Everyday Things by Don Norman
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTask;
