import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../featrures/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../featrures/activities/details/form/ActivityForm";
import ActivityDetail from "../../featrures/activities/details/ActivityDetail";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetail /> },
      { path: "createActivity", element: <ActivityForm key="create" /> },
      { path: "manage/:id", element: <ActivityForm key="manage" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
