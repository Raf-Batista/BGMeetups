import React, { useState, useEffect } from "react";

const MarketEditView = (props) => {
  const [boardgame, setBoardgame] = useState({
    name: "",
    description: "",
    price: 0.0,
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    setBoardgame({
      ...boardgame,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    setBoardgame({
      ...boardgame,
      imagePreview: URL.createObjectURL(uploadedImage),
      image: uploadedImage,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Boardgame to marketplace");
    console.log(boardgame);
  };

  return (
    <form className="mt-4 div-background py-2 mb-4" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="d-block my-2">Name</label>
        <input name="name" type="text" onChange={handleChange} />
        <label className="d-block my-2">Description</label>
        <textarea
          name="description"
          type="text"
          row="3"
          className="description"
          onChange={handleChange}
        />
        <label className="d-block my-2">Price</label>
        <input
          name="price"
          type="number"
          min="1"
          step="any"
          onChange={handleChange}
        />
        <div className="mt-3">
          <input
            name="test"
            type="file"
            className="img-form"
            accept="image/png, image/jpeg"
            filename={boardgame.name}
            onChange={handleImageUpload}
            // multiple
          />
          <small className="d-block my-2">JPG or PNG only. 1 MB max.</small>
          <img
            src={boardgame.imagePreview}
            style={{ width: "128px", height: "128px" }}
          />
        </div>

        <div>
          <button
            className="d-inline mx-2 mt-2 small-btn save-btn px-3"
            type="submit"
          >
            Save
          </button>
          <button className="d-inline small-btn px-2">Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default MarketEditView;
