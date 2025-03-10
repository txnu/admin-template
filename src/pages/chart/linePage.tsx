import { Box } from "@mui/material";
import Header from "../../components/header";
import LineChart from "./components/LineChart";

const LineChartPage = () => {
  return (
    <Box
      m="20px"
      flex="1">
      <Header
        title="Line Chart"
        subtitle="Simple Line Chart"
      />

      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default LineChartPage;
