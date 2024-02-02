import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const AllPosts = async () => {
      const response = await fetch("/allpost", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      });
      const result = await response.json();
      setData(result.posts);
    };
    AllPosts();
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
                <i className="material-icons">thumb_up</i>
                <i className="material-icons">thumb_down</i>
                <h6>{item.likes.length} likes</h6>
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
