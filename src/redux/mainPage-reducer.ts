import { todosAPI, usersAPI } from "../api/api";
import { Dispatch } from "redux";
import { AxiosResponse } from "axios";

const SET_TODOS = "SET_TODOS";
const SET_USERS = "SET_USERS";
const SET_PROGRESS = "SET_PROGRESS";
const SET_DONE = "SET_DONE";

export type TodosType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  map: any;
  status: string;
  length: number;
};
type GeoType = {
  lat: string;
  lng: string;
};
type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};
type CompanyType = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export type UsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
  map: any;
};

const initialState = {
  todos: [] as Array<TodosType>,
  users: [] as Array<UsersType>,
};
const usersReducer = (
  state: { todos: TodosType[]; users: UsersType[] } = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case SET_TODOS: {
      return {
        ...state,
        todos: action.todos.map((u: TodosType) => ({
          ...u,
          status: "To do",
        })),
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_PROGRESS: {
      return {
        ...state,
        todos: state.todos.map((u: TodosType) => {
          if (u["id"] === action.userID) {
            return { ...(u as Record<string, unknown>), status: "In progress" };
          }
          return u;
        }),
      };
    }
    case SET_DONE: {
      return {
        ...state,
        todos: state.todos.map((u: TodosType) => {
          if (u["id"] === action.userID) {
            return { ...(u as Record<string, unknown>), status: "Done" };
          }
          return u;
        }),
      };
    }
  }
  return state;
};

type ActionsType =
  | setTodosActionType
  | setUsersActionType
  | setProgressActionType
  | setDoneActionType;

type setTodosActionType = {
  type: typeof SET_TODOS;
  todos: TodosType;
};
type setUsersActionType = {
  type: typeof SET_USERS;
  users: UsersType;
};
type setProgressActionType = {
  type: typeof SET_PROGRESS;
  userID: number;
};
type setDoneActionType = {
  type: typeof SET_DONE;
  userID: number;
};

export const setTodos = (todos: TodosType): setTodosActionType => ({
  type: SET_TODOS,
  todos,
});
export const setUsers = (users: UsersType): setUsersActionType => ({
  type: SET_USERS,
  users,
});
export const setProgress = (userID: number): setProgressActionType => ({
  type: SET_PROGRESS,
  userID,
});
export const setDone = (userID: number): setDoneActionType => ({
  type: SET_DONE,
  userID,
});

export const getTodosThunkCreator = () => {
  return (dispatch: Dispatch<ActionsType>) => {
    todosAPI.getTodos().then((response: AxiosResponse<TodosType>) => {
      dispatch(setTodos(response.data));
    });
  };
};
export const getUsersThunkCreator = () => {
  return (dispatch: Dispatch<ActionsType>) => {
    usersAPI.getUsers().then((response: AxiosResponse<UsersType>) => {
      dispatch(setUsers(response.data));
    });
  };
};

export default usersReducer;
