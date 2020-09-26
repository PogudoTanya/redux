import React from "react";
import NotFoundImg from "../notFound/img/NotFoundImg.svg";
import style from "../notFound/notFound.module.css";
import { useSelector } from "react-redux";

export default function NotFound() {
  const state = useSelector((state) => state);
  const value = state.fetchReactComponent.value;
  return (
    <div className={style["error-block"]}>
      <img alt="" src={NotFoundImg} className={style["error-block__img"]} />
      <div className={style["error-block__text"]}>
        Sorry, there were no community results for {value}
      </div>
    </div>
  );
}
