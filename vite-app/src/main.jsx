import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
import "react-toastify/dist/ReactToastify.css";
import "./localization/i18n-initialization.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
