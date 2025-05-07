"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaFlickr,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/sp.svg"
            alt="Governo de São Paulo"
            width={60}
            height={60}
            className={styles.logo}
          />
          <div className={styles.logoText}>
            <strong>SÃO PAULO</strong>
            <span className={styles.subtitle}>GOVERNO DO ESTADO</span>
            <span className={styles.subtitle}>SÃO PAULO SÃO TODOS</span>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.socialContainer}>
            <SocialIcon
              href="https://www.flickr.com/governosp"
              icon={<FaFlickr />}
            />
            <SocialIcon
              href="https://www.linkedin.com/company/governosp"
              icon={<FaLinkedinIn />}
            />
            <SocialIcon
              href="https://www.tiktok.com/@governosp"
              icon={<SiTiktok />}
            />
            <SocialIcon
              href="https://www.youtube.com/governosp"
              icon={<FaYoutube />}
            />
            <SocialIcon
              href="https://twitter.com/governosp"
              icon={<FaTwitter />}
            />
            <SocialIcon
              href="https://www.instagram.com/governosp"
              icon={<FaInstagram />}
            />
            <SocialIcon
              href="https://www.facebook.com/governosp"
              icon={<FaFacebookF />}
            />
            <span className={styles.socialHandle}>/governosp</span>
          </div>

          <button
            className={styles.hamburgerButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <SocialLink
              href="https://www.flickr.com/governosp"
              icon={<FaFlickr />}
              text="Flickr"
            />
            <SocialLink
              href="https://www.linkedin.com/company/governosp"
              icon={<FaLinkedinIn />}
              text="LinkedIn"
            />
            <SocialLink
              href="https://www.tiktok.com/@governosp"
              icon={<SiTiktok />}
              text="TikTok"
            />
            <SocialLink
              href="https://www.youtube.com/governosp"
              icon={<FaYoutube />}
              text="YouTube"
            />
            <SocialLink
              href="https://twitter.com/governosp"
              icon={<FaTwitter />}
              text="Twitter"
            />
            <SocialLink
              href="https://www.instagram.com/governosp"
              icon={<FaInstagram />}
              text="Instagram"
            />
            <SocialLink
              href="https://www.facebook.com/governosp"
              icon={<FaFacebookF />}
              text="Facebook"
            />
          </div>
        )}
      </header>

      <div className={styles.navContainer}>
        <nav className={styles.navContent}>
          <ul>
            <li>
              <div className={styles.logoWrapper}>
                <Image
                  src="/logo_menu.png"
                  alt="Logo Menu"
                  fill
                  className={styles.logoMenu}
                />
              </div>

            </li>
          </ul>
        </nav>

        <div className={styles.profile}>
          <Image
            src="/profile.png"
            alt="Perfil"
            width={40}
            height={40}
            className={styles.profilePic}
          />
        </div>
      </div>

    </>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialIcon}
    >
      {icon}
    </a>
  );
}

function SocialLink({ href, icon, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.mobileLink}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
