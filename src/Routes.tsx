import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import CreateUser from "./pages/CreateUser";
import UserOverview from "./pages/UserOverview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "create",
        element: <CreateUser />,
      },
      {
        path: "overview",
        element: <UserOverview />,
      },
    ],
  },
]);
