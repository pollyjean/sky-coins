import styled from "styled-components";
import { fetchCoinList, ICoinList } from "../../api.ts";
import { useQuery } from "react-query";
import Loading from "../components/Loading.tsx";
import { Link } from "react-router-dom";

const CoinListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 1rem;
`;
const CoinItem = styled.li`
  width: 100%;
  a {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 0.5rem;
    padding: 1rem;
    gap: 0.5rem;
    img {
      height: 1.5rem;
    }
  }
`;

const Coins = () => {
  const { isLoading, isError, data } = useQuery<ICoinList[]>(["coinList"], fetchCoinList);
  if (isError) {
    console.log(isError);
    return <div>Error</div>;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CoinListContainer>
          {data?.slice(0, 100).map((coin) => (
            <CoinItem key={coin.id}>
              <Link to={coin.id}>
                <img src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`} alt="" />
                {coin.name}
              </Link>
            </CoinItem>
          ))}
        </CoinListContainer>
      )}
    </>
  );
};

export default Coins;
