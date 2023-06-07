import { SvgIcon, useTheme } from "@mui/material";
import Dark from "./svg/get_dark.svg";

interface iGetDarkProps {
  size?: number;
}

export const GetDark = ({ size }: iGetDarkProps) => {
  const theme = useTheme();
  return size ? (
    <SvgIcon
      component={Dark}
      sx={{ fontSize: theme.spacing(size) }}
      inheritViewBox
    />
  ) : (
    <SvgIcon component={Dark} inheritViewBox />
  );
};
