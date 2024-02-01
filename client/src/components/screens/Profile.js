import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {
  const [mypics, setPics] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  // const [image, setImage] = useState("");
  useEffect(() => {
    fetch("/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPics(result.mypost);
      });
  }, []);
  // useEffect(() => {
  //   if (image) {
  //     const data = new FormData();
  //     data.append("file", image);
  //     data.append("upload_preset", "insta-clone");
  //     data.append("cloud_name", "cnq");
  //     fetch("https://api.cloudinary.com/v1_1/cnq/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         fetch("/updatepic", {
  //           method: "put",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: "Bearer " + localStorage.getItem("jwt"),
  //           },
  //           body: JSON.stringify({
  //             pic: data.url,
  //           }),
  //         })
  //           .then((res) => res.json())
  //           .then((result) => {
  //             console.log(result);
  //             localStorage.setItem(
  //               "user",
  //               JSON.stringify({ ...state, pic: result.pic })
  //             );
  //             dispatch({ type: "UPDATEPIC", payload: result.pic });
  //             //window.location.reload()
  //           });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [image]);
  // const updatePhoto = (file) => {
  //   setImage(file);
  // };
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
            <h4>{state ? state.name : "Loading"}</h4>
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
        {mypics.map((item) => {
          return (
            <img
              key={item._id}
              className="item"
              src={item.photo}
              alt={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
