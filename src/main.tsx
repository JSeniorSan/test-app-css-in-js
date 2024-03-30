import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import { Provider } from "react-redux";
import { store } from "./entities/store/store.ts";

export const GlobalStyles = createGlobalStyle`
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
    <Provider store={store}>
      <GlobalStyles />

      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
