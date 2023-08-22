import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ICoinInfo, fetchCoinInfo } from "../../api";
import { useSetRecoilState } from "recoil";
import { pageTitleAtom } from "../../atom";

const Coin = () => {
  const { coinId } = useParams();
  const setterFn = useSetRecoilState(pageTitleAtom);
  const { data: infoData } = useQuery<ICoinInfo>(["info", coinId], () => fetchCoinInfo(coinId as string));
  setterFn(infoData?.name as string);
  return <div>{infoData?.symbol}</div>;
};

export default Coin;
