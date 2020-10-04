import React from "react";
import GlobalRoadmap from "./GlobalRoadmap";
import Search from "./Search";
import { useState, useEffect } from "react";
import Form from "./Form";

function Browse() {
  const [global, setGlobal] = useState([]);
  const [filter, setFilter] = useState("General")
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch('https://skilltracks.herokuapp.com/track', {
          method: 'GET'
        })
        const data = await res.json()
        if(!data.error) {
          console.log(data.tracks)
          setGlobal(data.tracks)
        }
      }
      fetchData()
    } catch (error) {
      
    }
  }, [])
  return (
    <>
      <div className="browse__top">
        <h1>Select Skilltracks you’d like to follow!</h1>
        <Search />
      </div>
      <div
        className="browse__wrapper"
        style={{
          display: "flex",
        }}
      >
        <div className="browse__roadmaps">
          {global && global.map((object) => 
          { console.log(object.author)
            if(object.category === filter)
            return (
            <GlobalRoadmap
              title={object.name}
              description={object.description}
              id={object._id}
              username={object.author.name}
              usertitle={object.category}
              key={object._id}
            />)
          })}
        </div>
        <div
          style={{
            paddingTop: "12vh",
            marginLeft: "2vw",
          }}
          className="browse__selection"
        >
          <Form value={filter} setValue={setFilter}/>
        </div>
      </div>
    </>
  );
}

export default Browse;
