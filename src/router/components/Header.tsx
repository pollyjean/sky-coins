import { useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, pageTitleAtom } from "../../atom";
import { Link } from "react-router-dom";

const Header = () => {
  const setterFn = useSetRecoilState(isDarkAtom);
  const isDark = useRecoilValue(isDarkAtom);
  const pageTitle = useRecoilValue(pageTitleAtom);
  const onClick = () => {
    setterFn((current) => !current);
  };
  return (
    <header>
      <h1>{pageTitle}</h1>
      <button onClick={onClick}>{isDark ? "Dark" : "Light"} Mode</button>
      <Link to="/">Back to Coins</Link>
    </header>
  );
};

export default Header;
