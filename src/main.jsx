import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Grab the mounting point from the HTML and hydrate our React app
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}