import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import AppClass from "./App2.jsx";
// import Hello from "./Hello.jsx";
import Card from "./Card";
import "tachyons";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AppClass /> */}
    {/* <App /> */}
    <Card />
    <Card />
    <Card />
  </StrictMode>
);
