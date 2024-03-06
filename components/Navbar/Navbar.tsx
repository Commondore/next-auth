"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "clsx";

import styles from "./style.module.css";

const LINKS = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "About", href: "/about" },
  { id: 3, title: "News", href: "/news" },
  { id: 4, title: "Contacts", href: "/contacts" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          Next JS
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {LINKS.map((link) => {
            return (
              <li key={link.id} className="nav-item">
                <Link
                  href={link.href}
                  className={cn("nav-link", pathname === link.href && "active")}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
    // <nav className="d-flex justify-content-center gap-3">
    //   {LINKS.map((link) => {
    //     return (
    //       <Link
    //         key={link.id}
    //         href={link.href}
    //         className={cn(styles.link, pathname === link.href && styles.active)}
    //       >
    //         {link.title}
    //       </Link>
    //     );
    //   })}
    // </nav>
  );
};

export default Navbar;
