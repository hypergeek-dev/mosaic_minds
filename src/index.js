import React from "react";
import "./Global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from 'react-dom/client';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';



axios.defaults.baseURL = "/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();