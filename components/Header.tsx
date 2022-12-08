import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/header.module.css";

import devLogo from "../public/assets/dev.png";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Sobre",
    route: "/sobre",
  },
  {
    name: "Projetos",
    route: "/projetos",
  },
  {
    name: "Contato",
    route: "/contato",
  },
];

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header>
      <div className={styles.header}>
        <span>
          Filipe Gallo
          <Image src={devLogo} alt="Logo Dev" />
        </span>
        <nav>
          <ul>
            {routes.map(({ name, route }) => (
              <li key={name}>
                <Link
                  href={route}
                  className={currentRoute === `${route}` ? "active" : ""}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <label htmlFor="theme">Tema</label>
          <input type="checkbox" name="theme" id="theme" />
        </div>
      </div>
    </header>
  );
};

export default Header;
