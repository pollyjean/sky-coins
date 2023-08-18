import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import styled from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";

const Container = styled.div`
  margin: 1rem;
`;

const Root = () => {
  return (
    <>
      <Container>
        <Helmet></Helmet>
        <GlobalStyle />
        <Header />
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
