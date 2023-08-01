import { useState } from "react";

import NavLink from "../NavLink";
import Hamburger from "../Hamburger";

const Nav = () => {
  const [hamburger, setHamburger] = useState<boolean>(false);

  const setHamburgerFalse = () => setHamburger(() => false);

  return (
    <>
      <Hamburger
        onSetHamburger={() => setHamburger((prev) => !prev)}
        hamburger={hamburger}
      />
      <nav className={`${hamburger ? "" : "close-nav"}`}>
        <NavLink setHamburger={setHamburgerFalse} href="/" name="Home" />
        <NavLink setHamburger={setHamburgerFalse} href="/bread" name="Bread" />
        <NavLink
          setHamburger={setHamburgerFalse}
          href="/about-us"
          name="About Us"
        />
      </nav>
    </>
  );
};

export default Nav;
