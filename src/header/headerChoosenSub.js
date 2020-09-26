import React from "react";
import DefaultImg from "../pages/allSubreddits/img/defaultImg.svg";
import { useSelector } from "react-redux";
import style from "header/header.module.css";

export default function HeaderChoosenSub() {
  const state = useSelector((state) => state);
  const clickedSubreddit = state.fetchReactComponent.clickedSubreddit;
  return (
    <div className={style["header_bottom-content_favourite"]}>
      <img
        alt=""
        src={
          clickedSubreddit.header_img != null
            ? clickedSubreddit.header_img
            : DefaultImg
        }
        className={style["header_bottom-content_img"]}
      />
      <div className={style["header_bottom-content_text"]}>
        {clickedSubreddit.display_name}
        <div className={style["header_bottom-content_context"]}>
          {clickedSubreddit.display_name_prefixed}
        </div>
      </div>
    </div>
  );
}
