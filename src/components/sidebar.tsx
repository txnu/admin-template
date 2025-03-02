import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { tokens } from "../theme";
import { Box, colors, IconButton, Typography, useTheme } from "@mui/material";
import { ReactNode, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import PieOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import { Link } from "react-router-dom";

interface ItemsProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: any;
  setSelected: (value: string) => void;
}

const Item = ({ title, to, icon, selected, setSelected }: ItemsProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      className={`${selected === title ? "ps-active" : ""}`}
      style={{ color: colors.grey[100], backgroundColor: "transparent" }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}>
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const bg_color =
    theme.palette.mode === "dark"
      ? colors.primary[400]
      : theme.palette.background.default;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        "& .ps-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .css-dip3t8": {
          background: `${bg_color}`,
        },
        "& .ps-icon-wrapper": {
          backgroundColor: `transparent !important`,
        },
        "& .ps-menu-button": {
          background: `${colors.primary[400]} !important`,
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menu-button:active": {
          color: "#6870fa !important",
        },
        "& .ps-menuitem-root.ps-active .ps-menu-button": {
          color: "#868dfb !important",
        },

        "& .ps-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menu-item.active": {
          color: "#6870fa !important",
        },
      }}>
      <Sidebar
        collapsed={isCollapsed}
        className="min-h-screen"
        rootStyles={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                color={bg_color}>
                <Typography
                  variant="h3"
                  color={colors.grey[100]}>
                  ADMIN PANEL
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}>
            Data
          </Typography>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Team"
              to="/team"
              icon={<GroupOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Contact"
              to="/contact"
              icon={<ContactOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Person"
              to="/person"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}>
            Pages
          </Typography>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Login Page"
              to="/login"
              icon={<LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}>
            Chart
          </Typography>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Bar Chart"
              to="/bar_chart"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Line Chart"
              to="/line_chart"
              icon={<StackedLineChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Pie Chart"
              to="/pie_chart"
              icon={<PieOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}>
            Maps
          </Typography>
          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Maps"
              to="/maps"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}></Item>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
