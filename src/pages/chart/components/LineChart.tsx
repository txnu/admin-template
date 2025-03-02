import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(173, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 181,
      },
      {
        x: "helicopter",
        y: 196,
      },
      {
        x: "boat",
        y: 151,
      },
      {
        x: "train",
        y: 122,
      },
      {
        x: "subway",
        y: 62,
      },
      {
        x: "bus",
        y: 144,
      },
      {
        x: "car",
        y: 113,
      },
      {
        x: "moto",
        y: 55,
      },
      {
        x: "bicycle",
        y: 119,
      },
      {
        x: "horse",
        y: 52,
      },
      {
        x: "skateboard",
        y: 210,
      },
      {
        x: "others",
        y: 270,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(85, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 128,
      },
      {
        x: "helicopter",
        y: 165,
      },
      {
        x: "boat",
        y: 55,
      },
      {
        x: "train",
        y: 66,
      },
      {
        x: "subway",
        y: 22,
      },
      {
        x: "bus",
        y: 24,
      },
      {
        x: "car",
        y: 161,
      },
      {
        x: "moto",
        y: 117,
      },
      {
        x: "bicycle",
        y: 205,
      },
      {
        x: "horse",
        y: 244,
      },
      {
        x: "skateboard",
        y: 91,
      },
      {
        x: "others",
        y: 123,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(308, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 32,
      },
      {
        x: "helicopter",
        y: 103,
      },
      {
        x: "boat",
        y: 87,
      },
      {
        x: "train",
        y: 269,
      },
      {
        x: "subway",
        y: 22,
      },
      {
        x: "bus",
        y: 52,
      },
      {
        x: "car",
        y: 152,
      },
      {
        x: "moto",
        y: 179,
      },
      {
        x: "bicycle",
        y: 189,
      },
      {
        x: "horse",
        y: 33,
      },
      {
        x: "skateboard",
        y: 194,
      },
      {
        x: "others",
        y: 233,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(142, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 22,
      },
      {
        x: "helicopter",
        y: 47,
      },
      {
        x: "boat",
        y: 135,
      },
      {
        x: "train",
        y: 28,
      },
      {
        x: "subway",
        y: 99,
      },
      {
        x: "bus",
        y: 20,
      },
      {
        x: "car",
        y: 224,
      },
      {
        x: "moto",
        y: 243,
      },
      {
        x: "bicycle",
        y: 144,
      },
      {
        x: "horse",
        y: 40,
      },
      {
        x: "skateboard",
        y: 124,
      },
      {
        x: "others",
        y: 177,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(271, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 120,
      },
      {
        x: "helicopter",
        y: 15,
      },
      {
        x: "boat",
        y: 122,
      },
      {
        x: "train",
        y: 182,
      },
      {
        x: "subway",
        y: 176,
      },
      {
        x: "bus",
        y: 95,
      },
      {
        x: "car",
        y: 229,
      },
      {
        x: "moto",
        y: 62,
      },
      {
        x: "bicycle",
        y: 189,
      },
      {
        x: "horse",
        y: 233,
      },
      {
        x: "skateboard",
        y: 144,
      },
      {
        x: "others",
        y: 56,
      },
    ],
  },
];

const LineChart = ({ isDashboard = false }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
