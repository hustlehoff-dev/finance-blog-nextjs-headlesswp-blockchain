"use client";

import Link from "next/link";
import styles from "./nav.module.scss";
import { useState } from "react";

import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CryptoBar from "@/components/cryptobar/Cryptobar";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={styles.navWrapper}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <img
                src="https://comeincrypto.com/cms/wp-content/uploads/2025/01/comeincrypto-logo-100x100-1.png"
                alt="ComeInCrypto"
                className={styles.logoImg}
              />
            </Link>
          </div>
          <h2 className={styles.websiteName}>
            ComeIn<span>Crypto</span>
            <p>
              <sub>Follow Wise Money</sub>
            </p>
          </h2>
          <div
            className={
              isActive
                ? `${styles.active} ${styles.mobileMenuBurger}`
                : styles.mobileMenuBurger
            }
            onClick={toggleMenu}>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
            <div className={styles.menuLine}></div>
          </div>
          <nav
            className={
              isActive
                ? `${styles.active} ${styles.mobileMenu}`
                : styles.mobileMenu
            }>
            <div className={styles.mobileMenuContainer}>
              <div className={styles.mobileSearch}>
                <form autoComplete="off" role="search">
                  <input
                    type="text"
                    placeholder=""
                    autoComplete="off"
                    id="search"
                  />
                  <label htmlFor="search">Search ComeInCrypto</label>
                </form>
              </div>
              <div className={styles.mobileSocials}>
                <ul>
                  <li>
                    <XIcon />
                  </li>
                  <li>
                    <TelegramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <YouTubeIcon />
                  </li>
                </ul>
              </div>
              <div className={styles.mobileLinks}>
                <ul>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                </ul>
              </div>
            </div>
          </nav>
        </nav>
      </div>
      <CryptoBar />
    </>
  );
};

export default Navbar;
