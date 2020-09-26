import React from "react";
import style from  "../allSubreddits/allSubreddits.module.css";
import defaultImg from "../allSubreddits/img/defaultImg.svg";

function AllSubreddits(props) {
  return (
    <div className={style.block}>
      {props.data.header_img ? (
        <img alt="" src={props.data.header_img} className={style.block__img} />
      ) : (
        <img alt="" src={defaultImg} className={style.block__img} />
      )}
      <div className={style.block__name}>
        <button
          type="button"
          onClick={() => {
            props.chooseSubreddit(props.data);
          }}
        >
         {props.data.url}
        </button>
      </div>
      <div className={style.block__description}>
        {props.data.public_description ? props.data.public_description : null}
      </div>
    </div>
  );
}

export default AllSubreddits;
