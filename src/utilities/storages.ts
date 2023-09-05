import { ITodoList } from "../atoms";

const STORAGE_KEY = "todoStorage";

export const setLocalStorage = (todoList: ITodoList[]) => {
  const jsonString = JSON.stringify(todoList);
  localStorage.setItem(STORAGE_KEY, jsonString);
};

export const getLocalStorage = () => {
  const storageString = localStorage.getItem(STORAGE_KEY) || "[]";
  return JSON.parse(storageString);
};
