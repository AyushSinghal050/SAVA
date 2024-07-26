import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import useStyles from "./styles";

const InputAadhaar = lazy(() =>
  import("../pages/createAhaHealthId/inputAadhaar")
);
const VerifyMobile = lazy(() =>
  import("../pages/createAhaHealthId/verifyMobile")
);

function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Context.Provider value={{ abc }}> */}
      {/* <Header /> */}
      {/* <Sidebar />  */}
      <div>
        <Routes>
          <Route path="create-abha-health-id" element={<InputAadhaar />} />
          <Route path="verify-mobile" element={<VerifyMobile />} />
        </Routes>
      </div>
      {/* </Context.Provider> */}
    </div>
  );
}

export default Layout;
