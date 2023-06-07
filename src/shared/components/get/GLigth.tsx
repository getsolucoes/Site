import { SvgIcon, useTheme } from "@mui/material";
import Ligth from "./svg/g_ligth.svg";

interface iGLigthProps {
  size?: number;
}

export const GLigth = ({ size }: iGLigthProps) => {
  const theme = useTheme();
  return size ? (
    <SvgIcon
      component={Ligth}
      sx={{ fontSize: theme.spacing(size) }}
      inheritViewBox
    />
  ) : (
    <SvgIcon component={Ligth} inheritViewBox />
  );
};
