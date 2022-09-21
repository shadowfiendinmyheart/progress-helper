import React from "react";
import {Link} from "react-router-dom";
import ROUTES from "../../constants/routes";

import styles from "./styles.module.less";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        <Link className={styles.link} to={ROUTES.MAIN_PAGE}>
          Main
        </Link>
        <Link className={styles.link} to={ROUTES.PROFILE_PAGE}>
          Profile
        </Link>
      </nav>
    </div>
  );
};

export default Header;
