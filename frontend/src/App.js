import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTitlesFromAPI } from "./actions";
import Header from "./Header";
import Routes from "./Routes";
import "./App.css";

/**
 * Main component for app
 * @returns JSX code for rendering app
 */
function App() {
  const dispatch = useDispatch();
  const err = useSelector(store => store.err);

  // when app renders, load all titles of posts from API for homepage
  useEffect(() => {
    dispatch(getTitlesFromAPI());
  }, [dispatch]);

  useEffect(() => {
    if (err) {
      console.error(err);
    }
  }, [err]);

  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
