import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import { StoreContext, store } from "./app/store/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router.tsx";
import "react-calendar/dist/Calendar.css";
import "./app/layout/style.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
