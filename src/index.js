import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SiderbarProvider } from "./context/sidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SiderbarProvider>
    <App />
  </SiderbarProvider>
);
