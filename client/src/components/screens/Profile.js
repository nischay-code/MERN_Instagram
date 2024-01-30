import React from "react";

const Profile = () => {
  return (
    <div style={{ maxWidth: "550px", margin: "0px auto" }}>
      <div
        style={{
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "80px",
              }}
              src="https://th.bing.com/th/id/R.b74966e366046deda383b0bcfd6e27f7?rik=rQPCKso0YaHEBA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_124200.png&ehk=AK9Eu0tjJY9LafYduYtAv7mmZTQK31ltfqBg0vFy8cw%3d&risl=&pid=ImgRaw&r=0"
              alt="Profile"
            />
          </div>
          <div>
            <h4>Bunny</h4>
            <h5>Bunny@gmail.com</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "108%",
              }}
            >
              <h6>34 posts</h6>
              <h6>34 followers</h6>
              <h6>34 following</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D"
          alt="Profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D"
          alt="Profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D"
          alt="Profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D"
          alt="Profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D"
          alt="Profile"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Profile;
