import React from "react";
import MytracksTop from "../components/MytracksTop";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
function CreateTrack() {
  return (
    <>
      <MytracksTop />
      <div className="Task__bg">
        <form>
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
              <input
                style={{
                  border: "none",
                  backgroundColor: "rgba(51,51,51,0.16)",
                  outlineWidth: 0,
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: 24,
                  lineHeight: 2,
                }}
                placeholder="Title"
              />

              <textarea
                style={{
                  border: "none",
                  backgroundColor: "rgba(51,51,51,0.16)",
                  outlineWidth: 0,
                  fontFamily: "Montserrat",
                  fontWeight: 400,
                  fontSize: 18,
                  marginTop: 20,
                  width: "80%",
                  minHeight: "80%",
                }}
                placeholder="Body"
              />
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
                    <input
                      style={{
                        border: "none",
                        backgroundColor: "rgba(51,51,51,0.16)",
                        outlineWidth: 0,
                        textDecoration: "none",
                        color: "black",
                      }}
                    />
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
                    <input
                      style={{
                        border: "none",
                        backgroundColor: "rgba(51,51,51,0.16)",
                        outlineWidth: 0,
                        textDecoration: "none",
                        color: "black",
                      }}
                    />{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            style={{
              border: "none",
              borderRadius: "999px",
              height: 30,
              width: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "100%",
              outlineWidth: 0,
              cursor: "pointer",
            }}
            type="submit"
          >
            <ChevronRightIcon />
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateTrack;
