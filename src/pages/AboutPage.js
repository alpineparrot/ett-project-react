import React from "react";
import Aboutp from "../components/About/Aboutp";
// import GetImages from "../components/GetImages/GetImages";
import Destinations from "../components/Destinations/Destinations"
import CockHeader from "../components/SingleCocktail/CockHeader";
import SearchInput from "../components/Search/SearchInput";
import CocktailList from "../components/SingleCocktail/CocktailList";
import Search from "../components/Movies/Search";
import MoviesList from "../components/Movies/MoviesList"

const AboutPage = () => {
      return (
        <>
          <Search />
          <MoviesList />
          {/* <SearchInput />
          <CocktailList /> */}
          <Aboutp />
          <Destinations />
          {/* <CockHeader /> */}

          {/* <GetImages /> */}
        </>
      );
    //   return <Aboutp />;
};

export default AboutPage;
