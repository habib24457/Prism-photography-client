import React, { useEffect, useState } from "react";
import NavigationBar from "../HomePage/Home/NavigationBar/NavigationBar";
import "./SearchPhoto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

const SearchPhoto = () => {
  const [imageData, setImageData] = useState([]);
  const [query, setQuery] = useState("");
  const KEY = "15674931-a9d714b6e9d654524df198e00&q";

  const getImages = () => {
    fetch(
      `https://pixabay.com/api/?key=${KEY}=${query}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImageData(data.hits);
      })
      .catch((err) => console.log(err));
  };

  //   const selectedItem =(event,img)=>{
  //     let element = event.target;
  //   element.classList.add('added');

  //   let item = sliders.indexOf(img);
  //   if (item === -1) {
  //     sliders.push(img);
  //   } else {
  //     sliders.splice(item,1);
  //     element.classList.remove('added');
  //   }
  //   }

  return (
    <div>
      <NavigationBar></NavigationBar>

      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4 search-area mt-5">
          <input
            className="input-group"
            type="text"
            placeholder="Type what image you want to see.."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button class="btn btn-success ml-3 mt-3" onClick={() => getImages()}>
            Search
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="row mt-5 text-center">
        {imageData.map((image) => (
          <div className="col-md-4 mb-3 img-div p-3">
            <img src={image.webformatURL} className="image-show" />

            <div className="pic-info mt-1">
              <a href={image.pageURL} target="_blank">
                <button className="btn btn-success p-2">
                  Visit original page
                </button>
              </a>

              <button className="btn btn-primary m-1">
                <FontAwesomeIcon style={{ color: "#ffffff" }} icon={faHeart} />
                {image.likes}
              </button>

              <button className="btn btn-primary m-1">
                <FontAwesomeIcon
                  style={{ color: "#ffffff" }}
                  icon={faComment}
                />
                {image.comments}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPhoto;
