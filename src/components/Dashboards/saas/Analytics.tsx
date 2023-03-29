import { Box, Card, useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import FlexBox from "components/FlexBox";
import { H3 } from "components/Typography";
import { FC } from "react";
import Chart from "react-apexcharts";
import AnalyticsPopover from "./AnalyticsPopover";

const data = {
  series: [75, 50, 25],
  categories: ["Impressions", "Previous"],
};

const Analytics: FC = () => {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: { background: "transparent" },
    colors: [theme.palette.primary.main, "#D0DBD4", "#317050"],
    labels: ["Impressions", "Previous"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: { show: false },
          value: { show: false },
        },
        hollow: { size: "28%" },
        track: {
          background: theme.palette.divider,
          margin: 13,
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "inherit",
      fontSize: "13px",
      fontWeight: 500,
      onItemClick: { toggleDataSeries: false },
      onItemHover: { highlightDataSeries: true },
    },
    tooltip: {
      enabled: true,
      style: { fontFamily: "inherit" },
      y: {
        formatter: (value) => `$${value}`,
      },
    },
    states: {
      hover: {
        filter: { type: "none" },
      },
      active: {
        filter: { type: "none" },
      },
    },
  };

  const chartSeries = data.series;
  return (
    <Card
      sx={{
        padding: "2rem",
        height: "100%",
        [theme.breakpoints.down(425)]: { padding: "1.5rem" },
      }}
    >
      <FlexBox alignItems="center" justifyContent="space-between">
        <H3
          color="primary.main"
          style={{
            borderBottom: "3px solid #317050",
            width: "fit-content",
            paddingBottom: "5px",
          }}
        >
          IMPRESSIONS
        </H3>
        <AnalyticsPopover />
      </FlexBox>

      <Box
        sx={{
          paddingTop: 2,
          "& .apexcharts-tooltip": {
            boxShadow: "none",
            "& .apexcharts-active": { paddingBottom: 0 },
            "&.apexcharts-theme-light": {
              border: "none",
              color: "white",
              borderRadius: "8px",
            },
          },
          "& .apexcharts-legend.position-bottom.apexcharts-align-center, .apexcharts-legend.position-top.apexcharts-align-center":
            { justifyContent: "space-evenly" },
          [theme.breakpoints.down(425)]: { padding: 0 },
        }}
      >
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="radialBar"
          height={300}
        />
      </Box>
    </Card>
  );
};

export default Analytics;
