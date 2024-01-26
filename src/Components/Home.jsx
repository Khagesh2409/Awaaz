import React, { useRef, useEffect } from "react";
import Nav from "./Nav";
import Content from "./Content";
import Features from "./Features"
import About from "./About";
import Account from "./Account_div";
import Ytlink from "./Ytlink";
import Testimonials from "./Testimonials";
import ContactUs from "./Contact_us";
import Footer from "./Footer";
import '../App.css';

const Home = () => {
    const featuresRef = useRef(null);

    useEffect(() => {
        // Use the hash in the URL to determine if scrolling is required
        const hash = window.location.hash;
        if (hash === '#features' && featuresRef.current) {
            featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const scrollToFeatures = () => {
        window.location.hash = '#features';
        if (featuresRef.current) {
            featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
            window.history.replaceState(null, null, '/');
        }, 10);
    };
    return (
        <div style={{scrollBehavior:'smooth'}}>
            <Nav />
            <Content scrollToFeatures={scrollToFeatures} />
            <Features ref={featuresRef} />
            <About />
            <Account />
            <Ytlink />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    )
};

export default Home;