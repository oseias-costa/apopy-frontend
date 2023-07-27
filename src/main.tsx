import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./presentation/redux/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/routes/RenderRoutes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
);
