import { atom, selector } from "recoil";

export interface ITodoList {
  id: number;
  text: string;
  category: "TODO" | "DOING" | "DONE";
}

export const categoryAtom = atom({
  key: "category",
  default: "TODO",
});

export const todoAtom = atom<ITodoList[]>({
  key: "todoList",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todoList = get(todoAtom);
    const category = get(categoryAtom);
    return [todoList.filter((item) => item.category === category)];
  },
});
