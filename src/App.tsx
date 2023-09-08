import { useRecoilState } from "recoil";
import { hoursSelector, minutesAtom } from "./atom";

interface ITimeInput {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

const TimeInput = ({ name, value, onChange, placeholder }: ITimeInput) => {
  const onFocus = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.select();
  };
  return (
    <input
      type="number"
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      min={0}
    />
  );
};

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minutesAtom);
  const [hours, setHours] = useRecoilState(hoursSelector);
  const handleMinutes = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (+value === 0) {
      event.currentTarget.select();
    }
    setMinutes(String(Number(value)));
  };
  const handleHours = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    if (+value === 0) {
      event.currentTarget.select();
    }
    setHours(String(Number(value)));
  };
  return (
    <>
      <TimeInput name={"minutes"} value={minutes} onChange={handleMinutes} placeholder={"Type minutes"} />
      <TimeInput name={"hours"} value={hours} onChange={handleHours} placeholder={"Type hours"} />
    </>
  );
};

export default App;
