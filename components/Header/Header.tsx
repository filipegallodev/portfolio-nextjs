import Link from "next/link";
import React from "react";

import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navList}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/projetos">Projetos</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
