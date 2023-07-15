import React from "react";
import Pricing from "../components/Pricing/Pricing";
import FirebaseNavbar from "../components/FirebaseNavbar/FirebaseNavbar"
import PricingHome from "../components/AddEditBlog/PricingHome"
import AddEditBlog from "../components/AddEditBlog/AddEditBlog";

const PricingPage = () => {
  return (
    <>
      <FirebaseNavbar />
      {/* <Pricing /> */}
      <AddEditBlog />
      <PricingHome />
    </>
  );
};

export default PricingPage;
