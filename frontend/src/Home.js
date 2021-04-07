import React from "react";
import TitleList from "./TitleList";

/**
 * Component for displaying homepage
 * @returns JSX code for rendering homepage
 */
const Home = () => {
  return (
    <>
      <p>
        Welcome to <b>Microblog</b>, our innovative site for communicating on
        the information superhighway.
      </p>
      <TitleList />
    </>
  );
};

export default Home;