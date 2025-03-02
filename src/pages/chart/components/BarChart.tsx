import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../../theme";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      country: "AD",
      "hot dog": 61,
      "hot dogColor": "hsl(334, 70%, 50%)",
      burger: 79,
      burgerColor: "hsl(85, 70%, 50%)",
      sandwich: 124,
      sandwichColor: "hsl(194, 70%, 50%)",
      kebab: 87,
      kebabColor: "hsl(348, 70%, 50%)",
      fries: 110,
      friesColor: "hsl(191, 70%, 50%)",
      donut: 193,
      donutColor: "hsl(173, 70%, 50%)",
    },
    {
      country: "AE",
      "hot dog": 8,
      "hot dogColor": "hsl(358, 70%, 50%)",
      burger: 57,
      burgerColor: "hsl(119, 70%, 50%)",
      sandwich: 66,
      sandwichColor: "hsl(111, 70%, 50%)",
      kebab: 162,
      kebabColor: "hsl(169, 70%, 50%)",
      fries: 182,
      friesColor: "hsl(322, 70%, 50%)",
      donut: 55,
      donutColor: "hsl(304, 70%, 50%)",
    },
    {
      country: "AF",
      "hot dog": 157,
      "hot dogColor": "hsl(56, 70%, 50%)",
      burger: 82,
      burgerColor: "hsl(16, 70%, 50%)",
      sandwich: 74,
      sandwichColor: "hsl(213, 70%, 50%)",
      kebab: 177,
      kebabColor: "hsl(19, 70%, 50%)",
      fries: 91,
      friesColor: "hsl(165, 70%, 50%)",
      donut: 46,
      donutColor: "hsl(311, 70%, 50%)",
    },
    {
      country: "AG",
      "hot dog": 13,
      "hot dogColor": "hsl(239, 70%, 50%)",
      burger: 33,
      burgerColor: "hsl(352, 70%, 50%)",
      sandwich: 197,
      sandwichColor: "hsl(272, 70%, 50%)",
      kebab: 142,
      kebabColor: "hsl(90, 70%, 50%)",
      fries: 67,
      friesColor: "hsl(237, 70%, 50%)",
      donut: 175,
      donutColor: "hsl(346, 70%, 50%)",
    },
    {
      country: "AI",
      "hot dog": 58,
      "hot dogColor": "hsl(184, 70%, 50%)",
      burger: 38,
      burgerColor: "hsl(167, 70%, 50%)",
      sandwich: 8,
      sandwichColor: "hsl(200, 70%, 50%)",
      kebab: 163,
      kebabColor: "hsl(294, 70%, 50%)",
      fries: 137,
      friesColor: "hsl(228, 70%, 50%)",
      donut: 2,
      donutColor: "hsl(301, 70%, 50%)",
    },
    {
      country: "AL",
      "hot dog": 105,
      "hot dogColor": "hsl(170, 70%, 50%)",
      burger: 90,
      burgerColor: "hsl(158, 70%, 50%)",
      sandwich: 11,
      sandwichColor: "hsl(31, 70%, 50%)",
      kebab: 117,
      kebabColor: "hsl(328, 70%, 50%)",
      fries: 25,
      friesColor: "hsl(134, 70%, 50%)",
      donut: 3,
      donutColor: "hsl(126, 70%, 50%)",
    },
    {
      country: "AM",
      "hot dog": 147,
      "hot dogColor": "hsl(176, 70%, 50%)",
      burger: 134,
      burgerColor: "hsl(52, 70%, 50%)",
      sandwich: 158,
      sandwichColor: "hsl(213, 70%, 50%)",
      kebab: 28,
      kebabColor: "hsl(182, 70%, 50%)",
      fries: 16,
      friesColor: "hsl(177, 70%, 50%)",
      donut: 161,
      donutColor: "hsl(116, 70%, 50%)",
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default BarChart;
