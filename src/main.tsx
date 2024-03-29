import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    
  }
`;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
