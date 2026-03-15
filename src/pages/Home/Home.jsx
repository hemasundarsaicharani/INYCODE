import React, { useEffect, useState } from "react";
import "./Home.css";

import Hero from "../../components/Hero/Hero";
import Courses from "../../components/Courses/Courses";
import Explore from "../../components/Explore/Explore";
import Features from "../../components/Features/Features";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";
import Stats from "../../components/Stats/Stats";
import Testimonials from "../../components/Testimonials/Testimonials";
import CTA from "../../components/CTA/CTA";
import Loader from "../../components/Loader/Loader";

function Home() {
    return (
        <div className="home">
            <Hero />
            
            <Courses />
            
            <Explore />
            
            <Features />
            
            <WorkingProcess />
            
            <Stats />

            <Testimonials />

            <CTA />
        </div>
    );
}

export default Home;