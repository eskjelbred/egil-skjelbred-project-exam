import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="fixed-bottom justify-content-center">
            <div class="container row m-auto pt-3">
                <div className="col">
                    <h3>HOLIDAZE</h3>
                    <p>
                        Holidaze is Bergen's local tourism agency for visitors to be able to find accommodations in the area. The Holidaze agency handles all enquiries for the
                        accommodation owners and you are therefor in safe hands.{" "}
                    </p>
                </div>
                <div className="col">
                    <h3>CUSTOMER SERVICE</h3>
                    <ul>
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <li>Customer policies</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>HOW TO BECOME A PARTNER</h3>
                    <p>
                        We are always on the lookout for a new partner. Register your account today to become a fulltime accommodation manager. You will receive instructions on how
                        to become an approved partner after registering your account.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
