import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/header";

const Contact = () => {
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
      headerName: "Level Akses",
      flex: 1,
      renderCell: () => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            sx={{
              backgroundColor: colors.greenAccent[600],
            }}>
            <CallOutlinedIcon />

            <Typography
              color={colors.grey[100]}
              sx={{ ml: "5px" }}>
              Call
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Contact"
        subtitle="Informasi Kontak tim"
      />
      <Box
        m="40px 0 0 0 "
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
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
          checkboxSelection
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Contact;
