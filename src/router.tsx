import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/root";
import { Home } from "@/screens/home";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
