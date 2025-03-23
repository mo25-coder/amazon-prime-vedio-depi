import "..src/assets/css/Nav/Nav.css";
import { FaSearch, FaUserCircle, FaBookmark } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { SiPrimevideo } from "react-icons/si";

import { useState } from "react";
// import { useEffect } from "react";
// import { useRef } from "react";

export default function Navbar() {
  //   const [hidden, setHidden] = useState(true);
  //   const [userHidden, setUserHidden] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  //   const [menuHidden, setMenuHidden] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [myStuffOpen, setMyStuffOpen] = useState(false);

  //   let menuRef = useRef();

  //   useEffect(() => {
  //     let handler = (event) => {
  //       if (!menuRef.current.contains(event.target)) {
  //         setMenuOpen(true);
  //       }
  //     };
  //     document.addEventListener("mousedown", handler);

  //     return () => {
  //       document.removeEventListener("mousedown", handler);
  //     };
  //   });

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
            <a href="/" className="navbarLstLink navbarLstHome">
              Home
            </a>
          </li>
          <li className="navbarLstItem">
            <a href="/" className="navbarLstLink">
              Movies
            </a>
          </li>
          <li className="navbarLstItem">
            <a href="/" className="navbarLstLink">
              TV Shows
            </a>
          </li>
        </ul>
      </div>

      {/* Search and User Section */}
      <div className="navbarRightContainer">
        {/* <div className="navSearchContainer"> */}
        <div className="navSearch">
          {/* <input type="text" placeholder="Search" className="searchInput" /> */}
          <FaSearch
            className="searchIcon"
            //   onClick={(hidden) => setHidden(!hidden)}
          />
          {/* </div> */}
        </div>
        <div className="navbarMenuContainer">
          {/* <a href="/"> */}
          <CgMenuGridO
            className="navbarMenuIcon"
            //   onMouseEnter={() => setMenuHidden(!menuHidden)}
            //   onMouseLeave={() => setMenuHidden(!menuHidden)}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {/* </a> */}
          {/* {menuHidden ? null : ( */}
          <div
            // ref={menuRef}
            className={`navbarDropMenu ${menuOpen ? "active" : "inactive"}`}
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
          {/* )} */}
        </div>
        <div
          className="navbarMyStuff"
          onClick={() => setMyStuffOpen(!myStuffOpen)}
          //   onMouseEnter={() => setIsMenuOpen(true)}
          //   onMouseLeave={() => setIsMenuOpen(false)}
        >
          <FaBookmark className="myStuffIcon" />

          {myStuffOpen && (
            <div className="myStuffMenu">
              <div>My Stuff</div>
              <ul className="myStuffMenuLst">
                <DropdownItem text={"All"} />
              </ul>
            </div>
          )}
        </div>
        <div
          className="navbarUserContainer"
          onMouseEnter={() => setIsUserMenuOpen(true)}
          onMouseLeave={() => setIsUserMenuOpen(false)}
        >
          <FaUserCircle
            className="navbarUserIcon"
            // onMouseEnter={() => setUserHidden(false)}
            // onMouseLeave={() => setUserHidden(true)}
          />

          {/* User Dropdown Menu */}
          {/* {userHidden ? null : (
            <div className="userMenu">
              <ul className="userMenuLst">
                <li className="userMenuLstItem">
                  <a href="/" className="userLstLink">
                    <span>Account</span>
                  </a>
                </li>
                <li className="userMenuLstItem">
                  <a href="/" className="userLstLink">
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </div>
          )} */}
          {isUserMenuOpen && (
            <div className="userMenu">
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
      <a href="/" className="navbar__link">
        <span>{props.text}</span>
      </a>
    </li>
  );
}
