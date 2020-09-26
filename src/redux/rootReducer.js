import { combineReducers } from "redux";
import {
  FETCH_REACT_COMPONENT,
  FETCH_INPUT_REACT_COMPONENT,
  FETCH_CLICKED_REACT_COMPONENT,
} from "./types";

const initialState = {
  reactSubreddit: null,
  showAllSubreddits: false,
  value: "",
  clickedSubreddit: undefined,
};

function fetchReactComponent(state = initialState, action) {
  switch (action.type) {
    case FETCH_REACT_COMPONENT:
      return { ...state, reactSubreddit: action.payload };
    case FETCH_INPUT_REACT_COMPONENT:
      return {
        ...state,
        reactSubreddit: action.payload.data,
        value: action.payload.value,
        showAllSubreddits: true,
      };
    case FETCH_CLICKED_REACT_COMPONENT:
      return {
        ...state,
        reactSubreddit: action.payload.data,
        clickedSubreddit: action.payload.value,
        showAllSubreddits: false,
      };
    default:
      return state;
  }
}

export default combineReducers({
  fetchReactComponent,
});
