import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/root";
import { Home } from "@/screens/home";
import { NotFound } from "./screens/404";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
