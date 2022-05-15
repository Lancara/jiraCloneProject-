import React from "react";
import generateRandomColor from "../../generateRandomColor/generateRandomColor";
import { TodosType, UsersType } from "../../../redux/mainPage-reducer";

type PropsType = {
  todos: TodosType;
  users: UsersType;
  status: string;
  setStatus: (userID: number) => void;
  statusOutput: string;
  classNameButton: string;
  classNameCircle: string;
  classNameInitials: string;
  classNameTitl: string;
  classNameStatus: string;
};

const OutputMainPage: React.FC<PropsType> = (props) => {
  return (
    <div>
      {props.todos.map((u: TodosType) => (
        <div key={u.id}>
          {u.status == props.status ? (
            <button
              className={props.classNameButton}
              onClick={() => {
                props.setStatus(u.id);
              }}
            >
              <div
                className={props.classNameCircle}
                style={{ backgroundColor: generateRandomColor() }}
              >
                {props.users.map((r: UsersType) => (
                  <div key={r.id}>
                    {r.id == u.userId ? (
                      <div className={props.classNameInitials}>
                        {r.name
                          .split(" ")
                          .map((x: string) => x[0])
                          .join("")
                          .substr(0, 2)}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
              <div className={props.classNameTitl}>{u.title}</div>
              <div className={props.classNameStatus}>{props.statusOutput}</div>
            </button>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OutputMainPage;
