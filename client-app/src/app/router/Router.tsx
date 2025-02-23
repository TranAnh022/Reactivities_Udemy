import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../featrures/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../featrures/activities/details/form/ActivityForm";
import ActivityDetail from "../../featrures/activities/details/ActivityDetail";
import TestErrors from "../../featrures/errors/TestError";
import NotFound from "../../featrures/errors/NotFound";
import ServerError from "../../featrures/errors/ServerError";
import LoginForm from "../../featrures/users/LoginForm";
import ProfilePage from "../../featrures/profiles/ProfilePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivityDetail /> },
      { path: "createActivity", element: <ActivityForm key="create" /> },
      { path: "manage/:id", element: <ActivityForm key="manage" /> },
      { path: "profiles/:username", element: <ProfilePage/> },
      { path: "login", element: <LoginForm /> },
      { path: "errors", element: <TestErrors /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
