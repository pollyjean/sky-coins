import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDarkAtom",
  default: true,
});
export const pageTitleAtom = atom({
  key: "pageTitleAtom",
  default: "Coin",
});
