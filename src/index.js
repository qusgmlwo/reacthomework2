import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Detail from "./Detail";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Detail/:index" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
