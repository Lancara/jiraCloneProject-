import axios from "axios";
import { TodosType, UsersType } from "../redux/mainPage-reducer";

export const todosAPI = {
  getTodos() {
    return axios.get<TodosType>("https://jsonplaceholder.typicode.com/todos");
  },
};

export const usersAPI = {
  getUsers() {
    return axios.get<UsersType>("https://jsonplaceholder.typicode.com/users");
  },
};
