import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        {
          <div className="card home-card">
            <h5 style={{ padding: "5px" }}>Bunny</h5>
            <div className="card-image">
              <img
                src="https://cdn.thinglink.me/api/image/772240865597849601/1024/10/scaletowidth/0/0/1/1/false/true?wait=true"
                alt="Profile"
              />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>
              <h6>5 likes</h6>
              <h6>title</h6>
              <p>body</p>

              <form>
                <input type="text" placeholder="add a comment" />
              </form>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default Home;
