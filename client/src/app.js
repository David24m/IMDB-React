import React from "react";
import ReactDOM from "react-dom";
import FilmBox from "./components/FilmBox";

window.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <FilmBox/>,
    document.getElementById('app')
  )
})
