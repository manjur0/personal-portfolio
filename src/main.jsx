/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */

/*
 * Node modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
 * Css files
 */
import "./index.css";
/*
 * Components
 */
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
