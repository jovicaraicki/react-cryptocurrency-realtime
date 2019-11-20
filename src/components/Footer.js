import React from 'react';
import { MDBFooter, MDBContainer } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="black" className="font-small pt-6 mt-4">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://myportfolio.in.rs/"> Jovica Raicki </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
};

export default Footer;