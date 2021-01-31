import React from 'react';
import About from 'components/About/About';
import ItemPage from 'components/ItemPage/ItemPage';
import films from './films.jpg';
import ray_img from './ray_people.jpg';
import starship from './starship.jpg';
import planet from './planet.jpg';
import vehicle from './vehicle.jpg';
import LazyLoad from 'react-lazyload';

const Landing = () => (
  <>
    <About/>
    <LazyLoad once={true}>
      <ItemPage srcImg={films} title="films"/>
    </LazyLoad>
    <LazyLoad>
      <ItemPage srcImg={ray_img} title="characters"/>
    </LazyLoad>
    <LazyLoad>
      <ItemPage srcImg={starship} title="starships"/>
    </LazyLoad>
    <LazyLoad>
      <ItemPage srcImg={planet} title="planets"/>
    </LazyLoad>
    <LazyLoad>
      <ItemPage srcImg={vehicle} title="vehicles"/>
    </LazyLoad>
  </>
);

export default Landing;
