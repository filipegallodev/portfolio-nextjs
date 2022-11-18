import Link from "next/link";
import Image from "next/image";
import React from "react";

import styles from "../../styles/header.module.css";
import logo from "../../public/dev.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Filipe Gallo</span>
        <Image src={logo} alt="Logo Dev" />
      </div>
      <div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/projetos">Projeto</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
