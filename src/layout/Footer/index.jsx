import React from "react";
import logo from "../../assets/Logo_footer.png"

function Footer() {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer_text">
                © 2020 Kasa. All rights reserved
            </div>
        </div>
    )
};

export default Footer;