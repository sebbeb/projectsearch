import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./components/App";

import "./globals.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
