import { SvgIcon, useTheme } from "@mui/material";
import Ligth from "./svg/get_ligth.svg";

interface iGetLigthProps {
  size?: number;
}

export const GetLigth = ({ size }: iGetLigthProps) => {
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
