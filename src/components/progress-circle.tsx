import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

interface ProgressCircleProps {
  progress?: any;
  size?: any;
}

const ProgressCircle = ({ progress, size }: ProgressCircleProps) => {
  progress = "0.75";
  size = "40";

  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${color.primary[400]} 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg, ${color.blueAccent[500]} ${angle}deg 360deg),
        ${color.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}></Box>
  );
};

export default ProgressCircle;
