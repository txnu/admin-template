import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Header from "../../components/header";
import { mockDataTeam } from "../../data/mockData.js";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const bg_color =
    theme.palette.mode === "dark"
      ? colors.primary[400]
      : theme.palette.background.default;

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "nama",
      headerName: "Nama",
      flex: 1,
      cellClassName: "nama-column--cell",
    },
    {
      field: "umur",
      headerName: "Umur",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "no_hp", headerName: "No Handphone", flex: 1 },
    {
      field: "role",
      headerAlign: "center",
      align: "center",
      headerName: "Level Akses",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => {
        const role = params.value as string;
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems={"center"}
            borderRadius="4px"
            sx={{
              backgroundColor:
                role === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700],
            }}>
            {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "manager" && <SecurityOutlinedIcon />}
            {role === "user" && <LockOpenOutlinedIcon />}
            <Typography
              color={colors.grey[100]}
              sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="TEAM"
        subtitle="Atur tim anda"
      />
      <Box
        m="40px 0 0 0 "
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none !important",
            backgroundColor: "transparent !important",
          },
          "& .MuiDataGrid-cell ": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${colors.blueAccent[700]} !important`,
            borderBottom: "none",
          },
          "& .nama-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-container--top [role=row], & .MuiDataGrid-container--bottom [role=row]":
            {
              backgroundColor: `${colors.blueAccent[700]} !important`,
            },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: bg_color,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
