import React, {useState} from 'react';
import { scaleDown as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'
import logo from '../images/logo-text.png'

export default function SidebarSlide() {

  /*Set Active Sidebar*/
  const [sidebar, setSidebar] = useState(0);

  const activeSidebar = (index) => {
    setSidebar(index);
    closeSideBar();
  };

  const [isOpen, setOpen] = useState(true)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  let styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#ffcc00'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#0D0E14',
      borderRight:'1px solid #343b44',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block',
      color: "#fff",
      margin: "5px auto",
      transitionDuration:"0.2s",
      textDecoration:"none",
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  return <div>
      <Menu className='sidebarSlide' isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} pageWrapId={ "sidebarWrapper" } outerContainerId={ "platform-cont" } styles={ styles }>
        <Link to="/"><img style={{marginBottom:"35px", padding:"0"}} width="100%" src={logo} alt="" /></Link>
        <Link id="home" onClick={() => activeSidebar(0)} className={sidebar === 0 ? "menu-item active" : "menu-item"} to="/safehaven">SAFE HAVEN</Link>
        <Link id="about" onClick={() => activeSidebar(1)} className={sidebar === 1 ? "menu-item active" : "menu-item"} to="/boobytrap">BOOBY TRAP</Link>
        <Link id="about" onClick={() => activeSidebar(2)} className={sidebar === 2 ? "menu-item active" : "menu-item"} to="/ongoing">DYOR PROJECTS</Link>
        <Link id="about" onClick={() => activeSidebar(3)} className={sidebar === 3 ? "menu-item active" : "menu-item"} to="/upcoming">UPCOMING PROJECTS</Link>
        <Link id="about" onClick={() => activeSidebar(4)} className={sidebar === 4 ? "menu-item active" : "menu-item"} to="/developers">DEVELOPERS</Link>
        <Link id="about" onClick={() => activeSidebar(5)} className={sidebar === 5 ? "menu-item active" : "menu-item"} to="/influencers">INFLUENCERS</Link>
        <Link id="about" onClick={() => activeSidebar(6)} className={sidebar === 6 ? "menu-item active" : "menu-item"} to="/promoters">AMA/CALL CHANNELS</Link>
        <Link id="about" onClick={() => activeSidebar(7)} className={sidebar === 7 ? "menu-item active" : "menu-item"} to="/comingsoon">OTHER SERVICES</Link>
        <Link id="contact" onClick={() => activeSidebar(8)} className={sidebar === 8 ? "menu-item active" : "menu-item"} to="/safehaven/ongoingprojects">BBT SQUARE</Link>
        <Link className="menu-item" onClick={() => activeSidebar(9)} to="/safehaven/projectowner">INSURANCE DAO</Link>
        <Link className="menu-item" onClick={() => activeSidebar(10)} to="/safehaven/developers">IEP</Link>
        <Link className="menu-item" onClick={() => activeSidebar(11)} to="/docs">DOCS</Link>
      </Menu>
  </div>
}