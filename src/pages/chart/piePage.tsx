import { Box, useTheme } from "@mui/material";
import Header from "../../components/header";
import { tokens } from "../../theme";
import PieChart from "./components/PieChart";

const PieChartPage = () => {
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
        <PieChart />
      </Box>
    </Box>
  );
};

export default PieChartPage;
