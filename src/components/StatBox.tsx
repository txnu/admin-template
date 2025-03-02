import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./progress-circle";

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: any;
  progress: any;
  increase: string;
}

const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxProps) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 30px">
      <Box
        display="flex"
        justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: color.grey[100] }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between">
        <Typography
          variant="h5"
          sx={{ color: color.greenAccent[100] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: color.greenAccent[100] }}>
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
