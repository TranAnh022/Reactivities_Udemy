import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import App from "./app/layout/App.tsx";
import { StoreContext, store } from "./app/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
