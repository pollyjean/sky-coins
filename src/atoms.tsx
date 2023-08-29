import { atom, selector } from "recoil";

export interface ITodoList {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

export const todoAtom = atom<ITodoList[]>({
  key: "todoList",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => [
    get(todoAtom).filter((item) => item.category === "TODO"),
    get(todoAtom).filter((item) => item.category === "DOING"),
    get(todoAtom).filter((item) => item.category === "DONE"),
  ],
});
