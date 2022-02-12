import React from "react"

//logos
import twitter from "../images/Twitter.png"
import github from "../images/GitHub.png"
import facebook from "../images/Facebook.png"
import insta from "../images/Instagram.png"


function Footer() {

    return (
        <footer>
            <a href="https://twitter.com/_GK_2027"><img src={twitter} alt="twitter" /></a>
            <a href="https://github.com/The-kadtan2027"><img src={github} alt="github" /></a>
            <a href="https://www.facebook.com/kadtan.gajanan/"><img src={facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/ig_gajukadtan_2027/"><img src={insta} alt="instagram" /></a>
        </footer>
    )
}

export default Footer;