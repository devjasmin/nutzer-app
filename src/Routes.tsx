import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Create from "./Create";
import Edit from "./Edit";

export const router = createBrowserRouter([
  {
    path: "/nutzer-app",
    element: <Dashboard />,
  },

  {
    path: "/nutzer-app/create",
    element: <Create />,
  },

  {
    path: "/nutzer-app/edit",
    element: <Edit />,
  },
]);
