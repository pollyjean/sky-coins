import { atom, selector } from "recoil";
import { getLocalStorage } from "./utilities/storages";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ITodoList {
  id: number;
  text: string;
  category: Categories;
}

export const categoryAtom = atom({
  key: "category",
  default: Categories.TODO,
});

export const todoAtom = atom<ITodoList[]>({
  key: "todoList",
  default: getLocalStorage(),
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todoList = get(todoAtom);
    const category = get(categoryAtom);
    return [todoList.filter((item) => item.category === category)];
  },
});
