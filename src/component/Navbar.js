import React from 'react'
import logo from "../images/logo.png"
import trapsheetpdf from '../whitepaper/BBT _TrapSheet_V3.pdf'
import { Link } from 'react-router-dom'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

export default function Navbar() {

    return (
        <div id='navbar-container'>
            <nav className="navbar mx-auto navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#about-cont">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#tokenomics-cont">Tokenomics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#taxation-cont">Eco-System</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#roadmap-cont">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a href={trapsheetpdf} target="_blank" rel="noreferrer" className="nav-link">Trapsheet</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/boobytrap/upcomingscam">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/boobytrap/upcomingscam">Contact Us</Link>
                            </li>
                        </ul>
                        <a href="https://t.me/boobytrapbsc" target="_blank" rel="noreferrer" className="nav-socials"><FaTelegramPlane/></a>
                        <a href="https://twitter.com/BoobyTrapBsc" target="_blank" rel="noreferrer" className="nav-socials"><FaTwitter/></a>
                        <Link to="/safehaven" className="btn btnOutline m-1">Platform</Link>

                    </div>
                    <div className="mob-nav">
                        <a href="https://t.me/boobytrapbsc" target="_blank" rel="noreferrer" className="btn p-1 m-1 text-light"><FaTelegramPlane/></a>
                        <Link to="/safehaven" className="btn btnOutline-sm m-1">Platform</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
