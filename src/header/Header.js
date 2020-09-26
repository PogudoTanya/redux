import React, { useState } from "react";
import style from "header/header.module.css";
import Reddit from "../header/img/reddit.svg";
import HeaderChoosenSub from "header/headerChoosenSub";
import HeaderFavouriteSub from "header/headerFavouriteSub";
import HeaderText from "header/headerText";
import { useSelector } from "react-redux";

export default function Header(props) {
  const [value, setValue] = useState("");
  const state = useSelector((state) => state);
  const clickedSubreddit = state.fetchReactComponent.clickedSubreddit;
  const showAllSubreddits = state.fetchReactComponent.showAllSubreddits;

  return (
    <div className={style.header}>
      <div className={style["header_top-content"]}>
        <img alt="" src={Reddit} className={style.header_img} />
        <div className={style["header-search"]}>
          <input
            placeholder="Search"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            className={style.header__input}
          />
          <button
            value={value}
            className={style.header__button}
            onClick={() => {
              props.searchSubreddit(value);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className={style["header_center-content"]} />
      <div className={style["header_bottom-content"]}>
        {showAllSubreddits ? (
          <HeaderText />
        ) : clickedSubreddit !== undefined ? (
          <HeaderChoosenSub />
        ) : (
          <HeaderFavouriteSub />
        )}
      </div>
    </div>
  );
}
