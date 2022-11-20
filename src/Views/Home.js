import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import PostListCards from "../components/Posts/Cards/PostListCards";

function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <h2 className="text-center m-5">Special offers</h2>
            <PostListCards />
            <Footer />
        </>
    );
}

export default Home;
