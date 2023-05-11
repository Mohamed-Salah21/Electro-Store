import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import Store from "./rtkQuery/Store";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/sea-green";
// import "@splidejs/react-splide/css/core";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
