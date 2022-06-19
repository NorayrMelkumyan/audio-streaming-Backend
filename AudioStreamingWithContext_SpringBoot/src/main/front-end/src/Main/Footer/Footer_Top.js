import React from "react";
import AboutUs from "./About_Us";
import ContactUs from "./Contact_Us";
import ForOurVisitors from "./For_Our_Visitors";

const FooterTop = () => {
    return (
        <div className="footer-top">
            <AboutUs />
            <ForOurVisitors />
            <ContactUs/>
        </div>
    )

}

export default FooterTop