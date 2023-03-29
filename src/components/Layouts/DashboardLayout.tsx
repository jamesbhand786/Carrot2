import { Box, styled } from "@mui/material";
import { FC, Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSideBar";

// styled components
const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  paddingLeft: 120,
  paddingRight: 50,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));
const DashboardLayout: FC = ({ children }) => {
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  return (
    <Fragment>
      <DashboardSidebar
        showMobileSideBar={showMobileSideBar}
        closeMobileSideBar={() => setShowMobileSideBar(false)}
      />
      <Wrapper>
        <DashboardNavbar
          setShowMobileSideBar={() => setShowMobileSideBar((state) => !state)}
        />
        {children || <Outlet />}
      </Wrapper>
    </Fragment>
  );
};

export default DashboardLayout;
