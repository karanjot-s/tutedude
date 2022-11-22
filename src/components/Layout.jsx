import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.png";
// import ProfileIcon from "../assets/icons/profile.svg";
import styles from "../styles/Layout.module.css";
import Breadcrumbs from "./Breadcrumbs";

const Layout = ({studentName}) => {
  const crumbs = [
    {
      link: "/",
      text: "UI/UX",
    },
    {
      link: "/refer",
      text: "Refer & Earn",
    },
    {
      link: "/refered",
      text: "Friends Refered",
    },
  ];

  return (
    <div className={styles.root}>
      <nav className={styles.navbar}>
        <img className={styles.logo} src={"/assets/logo.png"} alt="TuteDude" />
        <div className={styles.nav}>
          <div className={styles.links}>
            <Link to="">My Assignment</Link>
            <Link to="">Chat with Mentor</Link>
          </div>
          <div className={styles.profile}>
            <img className={styles.profile_icon} src={"/assets/icons/profile.svg"} alt="" />
            <span>{studentName}</span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0.589844L6 5.16984L10.59 0.589844L12 1.99984L6 7.99984L0 1.99984L1.41 0.589844Z"
                fill="#800080"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className={styles.main}>
        <Breadcrumbs crumbs={crumbs} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
