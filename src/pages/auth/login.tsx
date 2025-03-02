import {
  Box,
  Button,
  colors,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

const LoginPage = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <Box
      height={"100vh"}
      p={"20px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={"-70px"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"400px"}
        width={"350px"}
        bgcolor={color.primary[400]}
        borderRadius={4}
        p={"20px"}>
        <Box
          borderRadius={100}
          height={"100px"}
          width={"100px"}
          bgcolor={color.blueAccent[400]}
          p={"25px"}
          mb={"20px"}>
          <LoginOutlinedIcon sx={{ width: "50px", height: "50px" }} />
        </Box>
        <TextField
          id="outline-basic"
          label="Username"
          variant="outlined"
          color={"secondary"}
          margin="normal"
          fullWidth
        />
        <TextField
          id="outline-basic"
          label="Password"
          variant="outlined"
          margin="normal"
          color={"secondary"}
          fullWidth
        />
        <Button
          color="primary"
          fullWidth
          sx={{ m: "10px", backgroundColor: color.blueAccent[400] }}>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            color={colors.common.white}
            p={"5px"}>
            Login
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
