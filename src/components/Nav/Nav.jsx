import "..src/assets/css/Nav/Nav.css";
import { FaSearch, FaUserCircle, FaBookmark } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { SiPrimevideo } from "react-icons/si";

import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [myStuffOpen, setMyStuffOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  let menuRef = useRef();
  let userRef = useRef();
  let myStuffRef = useRef();
  let searchRef = useRef();

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleClickOutsideMenu = (event) => {
    if (!menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleClickOutsideUser = (event) => {
    if (!userRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleClickOutsideMyStuff = (event) => {
    if (!myStuffRef.current.contains(event.target)) {
      setMyStuffOpen(false);
    }
  };
  const handleClickOutsideSearch = (event) => {
    if (!searchRef.current.contains(event.target)) {
      setSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideUser);
    document.addEventListener("click", handleClickOutsideMenu);
    document.addEventListener("click", handleClickOutsideMyStuff);
    document.addEventListener("click", handleClickOutsideSearch);
    return () => {
      document.removeEventListener("click", handleClickOutsideUser);
      document.removeEventListener("click", handleClickOutsideMenu);
      document.removeEventListener("click", handleClickOutsideMyStuff);
      document.removeEventListener("click", handleClickOutsideSearch);
    };
  }, []);

  //   useEffect(() => {
  //     let handler = (event) => {
  //       if (!menuRef.current.contains(event.target)) {
  //         setMenuOpen(true);
  //       }
  //     };
  //     document.addEventListener("mousedown", handler);

  //     return () => {
  //       document.removeEventListener("mousedown", handler);
  //     };import { Routes, Route, Link } from "react-router-dom";

  //   });

  /*
  ================================
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);
//   const handleHover = () => {setIsOpen(true);};
//   const handleClickOutside = (event) => {
    // if (menuRef.current && !menuRef.current.contains(event.target)) {
    //   setIsOpen(false);
    // }
//   };

//   useEffect(() => {
    // document.addEventListener("click", handleClickOutside);
    // return () => {
    //   document.removeEventListener("click", handleClickOutside);
    // };
//   }, []);

  return (
    <nav className="navbar">
      <div className="brand">Brand</div>
      <div className="menu-container" ref={menuRef}>
        <button className="menu-button" onMouseEnter={handleHover}>
          Menu
        </button>
        {isOpen && (
          <ul className="dropdown">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default App;
=====================================
  */
  return (
    <div className="navbarContainer">
      <div className="navbarLogo">
        <a href="/">
          {/* <img src="../src/assets/prime.svg" alt="Prime Video Logo" className="navbarLogoImg"/> */}
          <SiPrimevideo className="navbarLogoIcon" />
        </a>
      </div>

      <div className="navbarLstContainer">
        <ul className="navbarLst">
          <li className=" navbarLstItem">
            <a href="#" className="navbarLstLink navbarLstHome" target="_blank">
              Home
            </a>
          </li>
          <li className="navbarLstItem">
            <a href="#" className="navbarLstLink" target="_blank">
              Movies
            </a>
          </li>
          <li className="navbarLstItem">
            <a href="#" className="navbarLstLink" target="_blank">
              TV Shows
            </a>
          </li>
        </ul>
      </div>

      {/* Search and User Section */}
      <div className="navbarRightContainer">
        {/* <div className="navSearchContainer"> */}
        <div className="navSearchContainer" ref={searchRef}>
          <FaSearch
            className="searchIcon"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          {searchOpen && (
            <form action="" method="post">
              <input
                type="text"
                placeholder="Search"
                className="searchInput"
              ></input>
            </form>
          )}
        </div>

        <div className="navbarMenuContainer" ref={menuRef}>
          <CgMenuGridO
            className="navbarMenuIcon"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div
              className={`navbarDropMenu ${menuOpen ? "active" : "inactive"}`}
              //   onMouseLeave={() => setMenuOpen(false)}
            >
              <div>Genre</div>
              <ul>
                <DropdownItem text={"Action"} />
                <DropdownItem text={"Adventure"} />
                <DropdownItem text={"Comedy"} />
                <DropdownItem text={"Documentary"} />
                <DropdownItem text={"Drama"} />
                <DropdownItem text={"Horror"} />
                <DropdownItem text={"Family"} />
                <DropdownItem text={"Kids"} />
                <DropdownItem text={"Mystery"} />
                <DropdownItem text={"Thrillers"} />
                <DropdownItem text={"Romance"} />
                <DropdownItem text={"SciFi"} />
              </ul>
            </div>
          )}
        </div>
        <div className="navbarMyStuff" ref={myStuffRef}>
          <FaBookmark
            className="myStuffIcon"
            onClick={() => setMyStuffOpen(!myStuffOpen)}
          />
          {myStuffOpen && (
            <div
              className="myStuffMenu"
              //   onMouseLeave={() => setMyStuffOpen(false)}
            >
              <div>My Stuff</div>
              <ul className="myStuffMenuLst">
                <DropdownItem
                  text={"All"}
                  //  to={"MyStuff"}
                />
              </ul>
            </div>
          )}
        </div>

        <div
          className="navbarUserContainer"
          ref={userRef}
          onMouseEnter={handleHover}
        >
          <FaUserCircle className="navbarUserIcon" />
          {isOpen && (
            <div
              className="userMenu"
              // onMouseLeave={() => setIsOpen(false)}
            >
              <ul className="userMenuLst">
                <DropdownItem text={"Account"} />
                <DropdownItem text={"Sign Out"} />
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li>
      {/* <Link to={props.alink} className="nav-link"> */}
      <a href="#" className="navbar__link">
        <span>{props.text}</span>
      </a>
      {/* </Link> */}
    </li>
  );
}
