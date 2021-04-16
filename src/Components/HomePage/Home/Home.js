import React from 'react';
import './Home.css';
import Header from './Header/Header';
import Services from '../Services/Services';
import ImageGallery from '../ImageGallery/ImageGallery';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ImageGallery></ImageGallery>
            <Services></Services>
           <Review></Review>
           <Footer></Footer>
        </div>
    );
};

export default Home;