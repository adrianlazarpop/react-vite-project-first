import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import AppClass from "./App2.jsx";
// import Hello from "./Hello.jsx";
import CardList from "./CardList";
import "tachyons";
import { robots } from "./robots";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AppClass /> */}
    {/* <App /> */}
    <CardList robots={robots} />
  </StrictMode>
);
