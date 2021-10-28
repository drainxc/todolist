import React from "react";
import TodoListTemplate from "../todoListTemplate";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Container() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TodoListTemplate />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
