import Link from "next/link";

import { inter } from "@/font";

const Footer = () => {
  return (
    <footer className={inter.className}>
      <h1 className="brand-name">BREDOUGH</h1>

      <section>
        <div>
          <Link href="/">Home</Link>
          <Link href="/bread">Bread</Link>
          <Link href="/about-us">About Us</Link>
        </div>

        <div>
          <span>Shop List</span>
          <span>Terms and Service</span>
          <span>Privacy Policy</span>
        </div>
      </section>

      <span>@2023 Bredough</span>
    </footer>
  );
};

export default Footer;
