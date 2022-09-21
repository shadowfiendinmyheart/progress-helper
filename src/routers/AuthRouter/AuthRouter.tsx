import React from "react";

import {Routes, Route} from "react-router-dom";
import ROUTES from "../../constants/routes";
import MainPage from "../../pages/MainPage";
import ProfilePage from "../../pages/ProfilePage";

const AuthRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
      <Route path={ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
    </Routes>
  );
};

export default AuthRouter;
