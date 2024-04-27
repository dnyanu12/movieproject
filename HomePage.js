import React from "react";
import Movies from "./Movies";
import SearchMoviePage from "./SearchMoviePage";

const HomePage = () => {
  return (
    <>
      <div className="container">
       
        <SearchMoviePage />
        <Movies />
      </div>
    </>
  );
};

export default HomePage;