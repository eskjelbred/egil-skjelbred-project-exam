import React from "react";
import { Button } from "react-bootstrap";

function HeroBooking() {
    return (
        <div className="d-flex hero-booking justify-content-around align-items-center">
            <div>
                <h4>Arrival date</h4>
                <span>01.01.2022</span>
            </div>
            <div>
                <h4>Departure date</h4>
                <span>10.01.2022</span>
            </div>
            <div>
                <h4>Adults</h4>
                <span>2</span>
            </div>
            <div>
                <h4>Children</h4>
                <span>5</span>
            </div>
            <div>
                <Button>Check availability</Button>
            </div>
        </div>
    );
}

export default HeroBooking;
