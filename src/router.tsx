import { createBrowserRouter } from "react-router-dom";
import Root from "./router/Root";
import NotFound from "./router/components/NotFound";
import Coins from "./router/screens/Coins";
import Coin from "./router/screens/Coin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
      },
    ],
  },
]);

export default router;
