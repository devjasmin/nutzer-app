import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Create from "./Create";
import Edit from "./Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },

  {
    path: "/create",
    element: <Create />,
  },

  {
    path: "/edit",
    element: <Edit />,
  },
]);
