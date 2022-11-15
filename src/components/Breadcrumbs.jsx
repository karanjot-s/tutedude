import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styles from "../styles/Breadcrumbs.module.css";

const Breadcrumbs = ({ crumbs }) => {
  const location = useLocation();
  const showTill = crumbs.findIndex((c) => c.link === location.pathname);

  return (
    <ul className={styles.crumbs}>
      {crumbs.map((crumb, i) => {
        if (i > showTill) return "";

        return (
          <li key={i}>
            <Link
              to={crumb.link}
              className={i === showTill ? styles.disabled : ""}
            >
              {crumb.text}
            </Link>
            {i !== showTill ? " > " : ""}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
