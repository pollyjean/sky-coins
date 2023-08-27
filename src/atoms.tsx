import { atom } from "recoil";

export interface ITodoList {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

export const todoAtom = atom<ITodoList[]>({ key: "todoList", default: [] });
