import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css'
import "../styles/index.css";

// components
import Home from "./components/Home";
import Card from "./components/Card";
import Title from "./components/Title";

let titleStyle = {
  fontSize: "120px",
  fontWeight: "100",
  color: "#e8dedf",
};

let cardStyle = {
  width: "35rem",
  fontSize: "25px",
  borderRadius: "0px",
  color: "#cbcbcb",
  fontWeight: "100",
  boxShadow: "0px 0px 5px 1px #cbcbcb",
};


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Title title={"Todos"} titleStyle={titleStyle} />
    <Card cardStyle={cardStyle} />
  </StrictMode>
);