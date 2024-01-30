import React from "react";

const CreatePost = () => {
  return (
    <div>
      <div
        className="card input-field"
        style={{
          margin: "30px auto",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input type="text" placeholder="title" />
        <input type="text" placeholder="body" />
        <div className="file-field input-field">
          <div className="btn #1877f2 blue darken-1">
            <span>Uplaod Image</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button className="btn waves-effect waves-light #1877f2 blue darken-1">
          Submit post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
