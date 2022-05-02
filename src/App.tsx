import * as React from "react";
import "./App.css";

export interface HelloProps {
  userName: string;
  lang: string;
}

const App = (props: HelloProps) => (
  <h1>
    Hi {props.userName} form React! Welcome to {props.lang}!
  </h1>
);

export default App;
