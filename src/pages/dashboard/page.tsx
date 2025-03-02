import {
  Box,
  Button,
  colors,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";
import StatBox from "../../components/StatBox";
import LineChart from "../chart/components/LineChart";
import ProgressCircle from "../../components/progress-circle";
import BarChart from "../chart/components/BarChart";
import PieChart from "../chart/components/PieChart";

const Dashboard = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  const bg_color =
    theme.palette.mode === "dark" ? color.primary[400] : colors.grey[300];
  return (
    <Box m={"20px"}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="Welcome to dashboard"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: color.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Laporan
          </Button>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px">
        <Box
          gridColumn="span 3"
          bgcolor={bg_color}
          borderRadius={2}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title="12,361"
            subtitle="Email Terkirim"
            progress="0.75"
            icon={
              <EmailIcon
                sx={{ color: color.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase="+14%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={bg_color}
          borderRadius={2}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title="155.343"
            subtitle="Produk Terjual"
            progress="0.5"
            icon={
              <PointOfSaleIcon
                sx={{ color: color.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase="+14%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={bg_color}
          borderRadius={2}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title="120"
            subtitle="Pertambahan Pelanggan"
            progress="0.5"
            icon={
              <PersonAddIcon
                sx={{ color: color.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase="+14%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={bg_color}
          borderRadius={2}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox
            title="120"
            subtitle="Pemasukan"
            progress="0.5"
            icon={
              <TrafficIcon
                sx={{ color: color.greenAccent[600], fontSize: "26px" }}
              />
            }
            increase="+14%"
          />
        </Box>

        {/* ROWS 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor={bg_color}>
          <Box
            mt={"25px"}
            p={"0 30px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={color.grey[100]}>
                Keuntungan Bulanan
              </Typography>
              <Typography
                variant="h3"
                fontWeight={"500"}
                color={color.greenAccent[500]}>
                Rp50.562.234,00
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: color.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            height="250px"
            mt={"-20px"}
            bgcolor={bg_color}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          bgcolor={bg_color}
          overflow={"auto"}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${color.primary[500]}`}
            color={color.grey[100]}
            p={"15px"}>
            <Typography
              color={color.grey[100]}
              variant="h5"
              fontWeight={"600"}>
              Transaksi terbaru
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${bg_color}`}
            p={"15px"}>
            <Box>
              <Typography
                color={color.greenAccent[500]}
                variant="h5"
                fontWeight={"600"}>
                012322
              </Typography>
              <Typography color={color.grey[100]}>Tanu Wijaya</Typography>
            </Box>
            <Box color={color.grey[100]}>01-03-2025</Box>
            <Box
              bgcolor={color.greenAccent[500]}
              p={"5px 10px"}
              borderRadius={"4px"}>
              Rp25.000
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${bg_color}`}
            p={"15px"}>
            <Box>
              <Typography
                color={color.greenAccent[500]}
                variant="h5"
                fontWeight={"600"}>
                012322
              </Typography>
              <Typography color={color.grey[100]}>Tanu Wijaya</Typography>
            </Box>
            <Box color={color.grey[100]}>01-03-2025</Box>
            <Box
              bgcolor={color.greenAccent[500]}
              p={"5px 10px"}
              borderRadius={"4px"}>
              Rp25.000
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${bg_color}`}
            p={"15px"}>
            <Box>
              <Typography
                color={color.greenAccent[500]}
                variant="h5"
                fontWeight={"600"}>
                012322
              </Typography>
              <Typography color={color.grey[100]}>Tanu Wijaya</Typography>
            </Box>
            <Box color={color.grey[100]}>01-03-2025</Box>
            <Box
              bgcolor={color.greenAccent[500]}
              p={"5px 10px"}
              borderRadius={"4px"}>
              Rp25.000
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${bg_color}`}
            p={"15px"}>
            <Box>
              <Typography
                color={color.greenAccent[500]}
                variant="h5"
                fontWeight={"600"}>
                012322
              </Typography>
              <Typography color={color.grey[100]}>Tanu Wijaya</Typography>
            </Box>
            <Box color={color.grey[100]}>01-03-2025</Box>
            <Box
              bgcolor={color.greenAccent[500]}
              p={"5px 10px"}
              borderRadius={"4px"}>
              Rp25.000
            </Box>
          </Box>
        </Box>

        {/* ROWS 3 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          bgcolor={bg_color}
          height={"230px"}
          p={"30px"}>
          <Typography
            variant="h5"
            fontWeight={"600"}>
            Pemasaran
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={"25px"}>
            <ProgressCircle size={"125"} />
            <Typography
              variant="h5"
              color={color.greenAccent[500]}
              sx={{ mt: "15px" }}>
              Rp2.071.323 Pendapatan Total
            </Typography>
            <Typography>Termasuk pendapatan grosir dan harian</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          height={"230px"}
          bgcolor={bg_color}>
          <Typography
            variant="h5"
            fontWeight={"600"}
            sx={{ p: "30px 30px 0 30px" }}>
            Jumlah Penjualan
          </Typography>
          <Box
            height={"200px"}
            mt={"-20px"}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          height={"230px"}
          bgcolor={bg_color}
          p={"10px"}>
          <Typography
            variant="h5"
            fontWeight={"600"}
            sx={{ mb: "10px" }}>
            Jumlah Penjualan
          </Typography>
          <Box height={"180px"}>
            <PieChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
