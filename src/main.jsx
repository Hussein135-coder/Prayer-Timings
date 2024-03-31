import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
ReactDOM.createRoot(document.getElementById("notify")).render(
  <ToastContainer autoClose="3000" />
);
