//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//import different languages
// import global.es from "src/translations/en/global.json";
// import global.en from "src/translations/en/global.json";
import App from './/app';

import './i18n';




//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);