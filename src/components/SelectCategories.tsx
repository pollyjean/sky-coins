import { useRecoilState } from "recoil";
import { Categories, categoryAtom } from "../atomsTodo";

const SelectCategories = () => {
  const [category, setCategory] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };
  return (
    <select name="selectCategory" onInput={onInput} value={category}>
      <option value={Categories.TODO}>Todo</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
    </select>
  );
};

export default SelectCategories;
