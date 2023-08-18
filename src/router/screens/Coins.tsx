import styled from "styled-components";

const CoinListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: stretch;
`;
const CoinItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    gap: 1rem;
  }
`;
const Coins = () => {
  return (
    <CoinListContainer>
      <CoinItem>
        <div>
          <strong>Name</strong>
          <span>text</span>
        </div>
        <div>
          <strong>Name</strong>
          <span>text</span>
        </div>
        <div>
          <strong>Name</strong>
          <span>text</span>
        </div>
      </CoinItem>
    </CoinListContainer>
  );
};

export default Coins;
