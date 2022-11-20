import React from "react";
import { Button } from "react-bootstrap";
import HeroBooking from "./HeroBooking";

function Hero() {
    return (
        <main>
            <div className="d-flex flex-column align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center text-white h-100">
                    <h1 className="text-center">Enjoy your holiday stay in the heart of Norwegian fjords</h1>
                    <p className="mt-3">As a European city of culture, world heritage city and UNESCO food city, Bergen offers experiences and culture at a high level. </p>
                    <Button className="mt-3">Read more</Button>
                </div>
                <HeroBooking />
            </div>
        </main>
    );
}

export default Hero;
