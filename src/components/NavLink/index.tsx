import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({
  name,
  href,
  setHamburger,
}: {
  name: string;
  href: string;
  setHamburger: () => void;
}) => {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpen(() => href === router.pathname);
  }, [router.pathname, href]);

  return (
    <Link onClick={setHamburger} className={open ? "active" : ""} href={href}>
      {name}
    </Link>
  );
};

export default NavLink;
