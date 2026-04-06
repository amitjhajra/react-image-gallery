import React from "react";

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div className="h-50 w-50 bg-white rounded-2xl">
          <img
            className="h-full object-cover w-full"
            src={props.elem.download_url}
            alt=""
          />
        </div>
        <div className="bg-black/60 text-white px-3 py-2 backdrop-blur-md">
          <h2>{props.elem.author}</h2>
        </div>
      </a>
    </div>
  );
};

export default Card;
