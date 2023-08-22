import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/GlobalStyle";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";
import { darkMode, lightMode } from "../assets/theme";

const Container = styled.div`
  margin: 1rem;
`;

const Root = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkMode : lightMode}>
        <Container>
          <Helmet></Helmet>
          <GlobalStyle />
          <Header />
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Root;
