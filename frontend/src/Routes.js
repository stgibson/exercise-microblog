import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import NewPostForm from "./NewPostForm";
import PostView from "./PostView";

/**
 * Component for setting up routes for app
 * @returns JSX code for rendering routes
 */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/new"><NewPostForm /></Route>
      <Route exact path="/:postId"><PostView /></Route>
    </Switch>
  );
};

export default Routes;