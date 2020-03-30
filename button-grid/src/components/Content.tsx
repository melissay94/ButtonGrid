import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import GameBoard from "../pages/GameBoard";
import NotFound from "../pages/NotFound";

type RouteProps = { level?: number };

function Content({ level }: RouteProps) {
  return (
    <Switch>
      <Route path="/" exact={ true } component={ Landing } />
      <Route path={ `/level-${level}` } render={() => <GameBoard /> } />
      <Route path="*" component= { NotFound } />
    </Switch>
  )
}

export default Content;
