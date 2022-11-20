import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import HeroBooking from "../components/Hero/HeroBooking";
import PostList from "../components/Posts/ListRows/PostList";
import SearchFilter from "../components/SearchFilter/SearchFilter";

function Booking() {
    return (
        <>
            <Navigation />
            <HeroBooking />
            <SearchFilter />
            <PostList />
            <Footer />
        </>
    );
}

export default Booking;
