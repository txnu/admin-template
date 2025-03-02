import { Box, useTheme } from "@mui/material";
import Header from "../../components/header";
import BarChart from "./components/BarChart";
import { tokens } from "../../theme";

const BarChartPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      m="20px"
      flex="1">
      <Header
        title="Bar Chart"
        subtitle="Simple Bar Chart"
      />

      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarChartPage;
