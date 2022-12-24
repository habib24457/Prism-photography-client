import React from "react";
import "./Home.css";
import Header from "./Header/Header";
import Services from "../Services/Services";
//import ImageGallery from '../ImageGallery/ImageGallery';
import Review from "../Review/Review";
import Footer from "../Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import Photographers from "./Photographers/Photographers";
import SearchRandomImg from "../SearchRandomImg/SearchRandomImg";

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Header></Header>
      <SearchRandomImg></SearchRandomImg>
      <Services></Services>
      <Photographers></Photographers>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
