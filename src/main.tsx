import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { darkMode } from "./theme";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkMode}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
