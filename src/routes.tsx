import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import DetailPage from "./pages/DetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:postId",
    element: <DetailPage />,
  },
]);
