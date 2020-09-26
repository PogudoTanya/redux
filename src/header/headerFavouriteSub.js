import React from "react";
import ReactImg from "../header/img/react.svg";
import style from "header/header.module.css";


export default function HeaderFavouriteSub () {
    return (
      <div className={style["header_bottom-content_favourite"]}>
        <img alt="" src={ReactImg} />
        <div className={style["header_bottom-content_text"]}>
          The React Library
          <div className={style["header_bottom-content_context"]}>r/react</div>
        </div>
      </div>
    );
}
