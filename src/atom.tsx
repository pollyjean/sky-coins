import { atom, selector } from "recoil";

export const minutesAtom = atom({
  key: "minutes",
  default: "",
});

export const hoursSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = Number(get(minutesAtom)) / 60;
    return String(minutes);
  },
  set: ({ set }, hourValue) => {
    const minutes = String(Number(hourValue) * 60);
    set(minutesAtom, minutes);
  },
});
