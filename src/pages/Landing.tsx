import React from 'react';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import ItemPage from "../components/ItemPage/ItemPage";
import films from './films.jpg'
import ray_img from './ray_people.jpg'
import starship from './starship.jpg'
import planet from './planet.jpg'
import vehicle from './vehicle.jpg'
import Footer from "../components/Footer/Footer";

const Landing = () => (
  <>
    <Header />
    <About />
    <ItemPage srcImg={films} title="films"/>
    <ItemPage srcImg={ray_img} title="people"/>
    <ItemPage srcImg={starship} title="starships"/>
    <ItemPage srcImg={planet} title="planets"/>
    <ItemPage srcImg={vehicle} title="vehicles"/>
    <Footer/>
  </>
);

export default Landing;
