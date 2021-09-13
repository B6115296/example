import React from "react";
import "./styles.css";
import { RecoilRoot } from "recoil";
import { Router } from "@reach/router";
import Loading from "./components/loading/loading";
import Todos from "./components/Todos/Todos";
import Notes from "./components/Notes/Notes";
import RecoilizeDebugger from 'recoilize';

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <RecoilizeDebugger />
        <Router>
          <Loading path="/" />
          <Todos path="/todos" />
          <Notes path="/notes" />
        </Router>
      </RecoilRoot>
    </div>
  );
}
