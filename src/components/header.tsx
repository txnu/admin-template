import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h3"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}>
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={colors.grey[200]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
