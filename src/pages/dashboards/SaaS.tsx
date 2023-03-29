import { Box, Grid, useTheme } from "@mui/material";
import Analytics from "components/Dashboards/saas/Analytics";
import SaaSCard from "components/Dashboards/saas/Card";
import TotalSpent from "components/Dashboards/saas/TotalSpent";
import useTitle from "hooks/useTitle";
import BucketIcon from "icons/BucketIcon";
import EarningIcon from "icons/EarningIcon";
import PeopleIcon from "icons/PeopleIcon";
import WindowsLogoIcon from "icons/WindowsLogoIcon";
import { FC } from "react";

const SaaS: FC = () => {
  useTitle("CarrotCAKE");
  const theme = useTheme();
  const cardList = [
    {
      price: 5133.15,
      Icon: BucketIcon,
      title: "Amount Spent",
      color: theme.palette.primary.main,
    },
    {
      price: 3.84,
      title: "CRM",
      Icon: EarningIcon,
      color: theme.palette.primary.purple,
    },
    {
      price: 1.01,
      Icon: WindowsLogoIcon,
      title: "Link CTR",
      color: theme.palette.primary.red,
    },
    {
      price: 1.1,
      Icon: PeopleIcon,
      title: "Link Clicks",
      color: theme.palette.primary.yellow,
    },
    {
      price: 1.7,
      Icon: PeopleIcon,
      title: "Frequency",
      color: theme.palette.primary.yellow,
    },
    {
      price: 0.24,
      Icon: PeopleIcon,
      title: "CPC (Link)",
      color: theme.palette.primary.yellow,
    },
  ];
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item lg={6} md={7} xs={12}>
          <TotalSpent />
        </Grid>
        <Grid item lg={6} md={5} xs={12}>
          <Analytics />
        </Grid>
        <Grid container spacing={{ xs: 1 }}>
          {cardList.map((card, index) => (
            <Grid item lg={5} xs={2} key={index} margin={2} mt={4}>
              <SaaSCard card={card} />
            </Grid>
          ))}
        </Grid>
        {/* <Grid item lg={8} md={7} xs={12}>
          <RecentOrders />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <TopSelling />
        </Grid>
        <Grid item xs={12}>
          <Footer imageLink="/static/illustration/sass-dashboard.svg" />
        </Grid> */}
      </Grid>
    </Box>
  );
};
export default SaaS;
