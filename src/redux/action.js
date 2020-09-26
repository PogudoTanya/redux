import {
  FETCH_REACT_COMPONENT,
  FETCH_INPUT_REACT_COMPONENT,
  FETCH_CLICKED_REACT_COMPONENT,
} from "./types";

export function fetchReactComponent(topic = "react", fetchReddit) {
  return async function (dispatch) {
    const data = await fetchReddit(`/r/${topic}/hot`).then((res) => res.json());
    dispatch({
      type: FETCH_REACT_COMPONENT,
      payload: data,
    });
  };
}

export function fetchInputComponent(value, fetchReddit) {
  return async function (dispatch) {
    const data = await fetchReddit(
      `/subreddits/search?q=${value}`
    ).then((res) => res.json());
    dispatch({
      type: FETCH_INPUT_REACT_COMPONENT,
      payload: {
        data,
        value,
      },
    });
  };
}

export function fetchChooseSubreddit(value, fetchReddit) {
  return async function (dispatch) {
    const data = await fetchReddit(`/r/${value.display_name}/hot`).then((res) =>
      res.json()
    );
    dispatch({
      type: FETCH_CLICKED_REACT_COMPONENT,
      payload: {
        data,
        value,
      },
    });
  };
}
