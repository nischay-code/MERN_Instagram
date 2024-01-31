import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
  }, []);
  return (
    <>
      <div className="home">
        {data.map((item) => {
          return (
            <div className="card home-card" key={item._id}>
              <h5 style={{ padding: "5px" }}>{item.postedBy.name}</h5>
              <div className="card-image">
                <img src={item.photo} alt="Profile" />
              </div>
              <div className="card-content">
                <i className="material-icons" style={{ color: "red" }}>
                  favorite
                </i>
                <h6>5 likes</h6>
                <h6>{item.title}</h6>
                <p>{item.body}</p>

                <form>
                  <input type="text" placeholder="add a comment" />
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
