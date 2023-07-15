import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

// import "react-toastify/dist/react-toastify.css";
// import { ToastContainer } from "react-toastify";


import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Aboutp from './pages/AboutPage';
import Login from './pages/MapPage';
import Footer from "./components/Footer/Footer";
// import SingleCocktail from './components/SingleCocktail/SingleCocktail';
import Movie from "./components/Movies/Movie"
import AddEditBlog from "./components/AddEditBlog/AddEditBlog";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {/* <ToastContainer position="top-center" /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/pricing" exact component={Pricing} />
        <Route path="/createe" exact component={<AddEditBlog />} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={Aboutp} />
        {/* <Route
          path="/about/cocktail/:id"
          exact
          component={<SingleCocktail />}
        /> */}
        <Route path="/about/movie/:id" exact component={<Movie />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;