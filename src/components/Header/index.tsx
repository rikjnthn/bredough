import { inter } from "@/font";

import Nav from "../Nav";

const Header = () => {

  return (
    <header className={`${inter.className}`}>
      <h1 className="brand-name">BREDOUGH</h1>
      <Nav />
    </header>
  );
};

export default Header;
