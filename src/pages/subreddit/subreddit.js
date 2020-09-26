import React from "react";
import style from "../subreddit/subreddit.module.css";
import moment from "moment";
import Comment from "../subreddit/img/comment.svg";

function Subreddit (props) {
    return (
      <div className={style['body-content']}>
        <div className={style["body-content_creator"]}>
          Created by {props.data.author}
          {moment.unix(props.data.created_utc).startOf("day").fromNow()}
        </div>
        <div className={style["body-content__title"]}>{props.data.title}</div>
        <div className={style["body-content__text"]}>
          {props.data.selftext
            ? props.data.selftext
            : props.data.url}
        </div>
        <div className={style["body-content__comment"]}>
          <img alt="" src={Comment} />
          <div className={style["body-content__comment-text"]}>
            {props.data.score} Comments
          </div>
        </div>
      </div>
    );
  }

  export default Subreddit;