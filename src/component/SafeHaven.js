import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import PlatformHead from "./PlatformHead";
import Safecards from "./Safecards";
import SafeOwners from "./SafeOwners";
import SidebarSlide from "./SidebarSlide";

export default function SafeHaven() {
  const [activeTab, setActiveTab] = useState(1);

  const toggleActive = (num) => {
    setActiveTab(num);
  };

  return (
    <>
    <SidebarSlide/>
    <PlatformHead/>
      <div
        id="safehaven-cont"
        className="pt-5 position-relative"
        style={{ borderTop: "1px solid #474747", maxWidth:"1150px", margin:"auto", }}
      >
        <h1>SAFE HAVEN</h1>
        <h2>Best Rated in DeFi</h2>
        <p>
          0 Trap Points means the safest! lower trap points means safer! Read more
          about{" "}
          <Link
            to="/"
            style={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}
          >
            trap points
          </Link>
        </p>
        <div className="projectTable mt-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link
                className={activeTab === 1 ? "nav-link active" : "nav-link"}
                aria-current="page"
                onClick={() => toggleActive(1)}
                to="/safehaven"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={activeTab === 2 ? "nav-link active" : "nav-link"}
                onClick={() => toggleActive(2)}
                to="/safehaven"
              >
                Project Owners
              </Link>
            </li>
          </ul>
          <div className="container-fluid mt-2">
            {activeTab === 1 ? <Safecards/>:<SafeOwners/>}
          </div>
        </div>
      </div>
    </>
  );
}
