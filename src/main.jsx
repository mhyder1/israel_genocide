import { render } from "preact";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app.jsx";
import { PrimeReactProvider } from "primereact/api";
// import './index.css'

render(
  <BrowserRouter>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
