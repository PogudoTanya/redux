import React, { useEffect } from "react";
import { withRedditApi } from "hooks/useRedditApi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReactComponent,
  fetchInputComponent,
  fetchChooseSubreddit,
} from "redux/action";
import Header from "../../header/Header";
import AllSubreddits from "../allSubreddits/AllSubreddits";
import Subreddit from "../subreddit/subreddit";
import NotFound from "../notFound/NotFound";
import { v4 as uuidv4 } from "uuid";
import style from "./home.module.css";

function Home(props) {
  const { fetchReddit } = props;
  const state = useSelector((state) => state);
  const reactSubreddit = state.fetchReactComponent.reactSubreddit;
  const showAllSubreddits = state.fetchReactComponent.showAllSubreddits;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReactComponent(undefined, fetchReddit));
  }, [dispatch, fetchReddit]);

  const searchSubreddit = (value) => {
    if (value === "") {
      return <NotFound />;
    } else {
      dispatch(fetchInputComponent(value, fetchReddit));
    }
  };

  const chooseSubreddit = async (value) => {
    dispatch(fetchChooseSubreddit(value, fetchReddit));
  };

  if (!reactSubreddit) {
    return <p>Loading</p>;
  }
  
  return (
    <section className={style.body}>
      <Header searchSubreddit={searchSubreddit} />
      <div className={style['title-text']}>
        {reactSubreddit.data.children.length !== 0
          ? showAllSubreddits
            ? "Communities and users"
            : null
          : null}
      </div>

      {reactSubreddit.data.children !== undefined ? (
        reactSubreddit.data.children.length !== 0 ? (
          reactSubreddit.data.children.map((child, index) =>
            showAllSubreddits ? (
              index < 10 ? (
                <AllSubreddits
                  data={child.data}
                  chooseSubreddit={chooseSubreddit}
                  key={uuidv4()}
                />
              ) : null
            ) : index < 10 ? (
              <Subreddit data={child.data} key={uuidv4()} />
            ) : (
              <null />
            )
          )
        ) : (
          <NotFound />
        )
      ) : (
        <NotFound />
      )}
    </section>
  );
}

export default withRedditApi(Home);
