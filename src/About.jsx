import React from "react";
import web from '../src/images/illustration-2.svg';
import Comman from './Comman';

const About = () => {
    return (
        <Comman name="Welcome to About page" imgsrc={web} visit="/contact" btnname="Contact Now" />
    );
};

export default About;