import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import mainPage from "./mainPage";
import {
  getTodosThunkCreator,
  getUsersThunkCreator,
  setDone,
  setProgress,
} from "../../redux/mainPage-reducer";
import { AppStateType } from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    todos: state.mainPage["todos"],
    users: state.mainPage["users"],
  };
};

export default compose(
  connect(mapStateToProps, {
    getTodosThunkCreator,
    getUsersThunkCreator,
    setProgress,
    setDone,
  })
)(mainPage);
