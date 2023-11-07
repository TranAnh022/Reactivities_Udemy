import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import { StoreContext, store } from "./app/store/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router} />
  </StoreContext.Provider>
);
