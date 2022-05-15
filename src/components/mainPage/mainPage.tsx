import React from "react";
import classes from "./mainPage.module.scss";
import OutputMainPage from "./outputMainPage/outputMainPage";
import { TodosType, UsersType } from "../../redux/mainPage-reducer";

type PropsType = {
  todos: TodosType;
  users: UsersType;
  getTodosThunkCreator: () => void;
  getUsersThunkCreator: () => void;
  setProgress: (userID: number) => void;
  setDone: (userID: number) => void;
};

const MainPage: React.FC<PropsType> = (props) => {
  if (props.todos.length === 0) {
    props.getTodosThunkCreator();
    props.getUsersThunkCreator();
  }

  return (
    <div>
      <div className={classes.title}>Ticket list</div>
      <div className={classes.wrapperTicketListOuther}>
        <div className={classes.wrapperTicketListInner}>
          <OutputMainPage
            todos={props.todos}
            users={props.users}
            setStatus={props.setProgress}
            status="To do"
            statusOutput="To do"
            classNameButton={classes.buttonOutputTicketList}
            classNameCircle={classes.circleOutputTicketList}
            classNameTitl={classes.titlOutputTicketList}
            classNameInitials={classes.initialsOutputTicketList}
            classNameStatus={classes.statusOutputTicketList}
          />
          <OutputMainPage
            todos={props.todos}
            users={props.users}
            setStatus={props.setDone}
            status="In progress"
            statusOutput="In progress"
            classNameButton={classes.buttonOutputTicketList}
            classNameCircle={classes.circleOutputTicketList}
            classNameTitl={classes.titlOutputTicketList}
            classNameInitials={classes.initialsOutputTicketList}
            classNameStatus={classes.statusOutputTicketList}
          />
          <OutputMainPage
            todos={props.todos}
            users={props.users}
            setStatus={props.setDone}
            status="Done"
            statusOutput="Done"
            classNameButton={classes.buttonOutputTicketList}
            classNameCircle={classes.circleOutputTicketList}
            classNameTitl={classes.titlOutputTicketList}
            classNameInitials={classes.initialsOutputTicketList}
            classNameStatus={classes.statusOutputTicketList}
          />
        </div>
      </div>

      <div className={classes.title}>Board</div>
      <div className={classes.wrapperBoardOuther}>
        <div className={classes.wrapperBoardInner}>
          <div className={classes.wrapperBoardToDo}>
            <div className={classes.subtitleBoard}>To do</div>
            <OutputMainPage
              todos={props.todos}
              users={props.users}
              setStatus={props.setProgress}
              status="To do"
              statusOutput=""
              classNameButton={classes.buttonOutputBoard}
              classNameCircle={classes.circleOutputBoard}
              classNameTitl={classes.titlOutputBoard}
              classNameInitials={classes.initialsOutputBoard}
              classNameStatus=""
            />
          </div>
          <div className={classes.wrapperBoardInProgress}>
            <div className={classes.subtitleBoard}>In progress</div>
            <OutputMainPage
              todos={props.todos}
              users={props.users}
              setStatus={props.setDone}
              status="In progress"
              statusOutput=""
              classNameButton={classes.buttonOutputBoard}
              classNameCircle={classes.circleOutputBoard}
              classNameTitl={classes.titlOutputBoard}
              classNameInitials={classes.initialsOutputBoard}
              classNameStatus=""
            />
          </div>
          <div className={classes.wrapperBoardSubtitleBoard}>
            <div className={classes.subtitleBoard}>Done</div>
            <OutputMainPage
              todos={props.todos}
              users={props.users}
              setStatus={props.setDone}
              status="Done"
              statusOutput=""
              classNameButton={classes.buttonOutputBoard}
              classNameCircle={classes.circleOutputBoard}
              classNameTitl={classes.titlOutputBoard}
              classNameInitials={classes.initialsOutputBoard}
              classNameStatus=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
