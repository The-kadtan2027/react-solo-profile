import React from "react"
import email from "../images/mail.png";
import linkedin from "../images/linkedin.png";


function Buttons () {
    return (
        <div className="btn">
            <a href="mailto:gajanankadtan57@gmail.com" className="email"><img src={email} alt="email" /> Email</a>
            <a href="https://www.linkedin.com/in/gajanan-kadtan-1a84071a3" className="linkedin"><img src={linkedin} alt="linkedin"/> LinkedIn</a>

        </div>
    )
}

export default Buttons;