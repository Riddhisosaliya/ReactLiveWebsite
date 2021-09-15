import React from "react";
import web from '../src/images/illustration-1.svg';
import Comman from './Comman';

const Home = () => {
    return (
        <Comman name="Grow your business with" imgsrc={web} visit="/services" btnname="Get Started" />
    );
};

export default Home;