import Link from "next/link";
import React from "react";

import styles from "../styles/header.module.css";

import devLogo from "../public/assets/dev.png";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <span>
          Filipe Gallo
          <Image src={devLogo} alt="Logo Dev" />
        </span>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="sobre">Sobre</Link>
            </li>
            <li>
              <Link href="projetos">Projetos</Link>
            </li>
            <li>
              <Link href="contato">Contato</Link>
            </li>
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
