import { SvgIcon, useTheme } from "@mui/material";
import Dark from "./svg/g_dark.svg";

interface iGDarkProps {
  size?: number;
}

export const GDark = ({ size }: iGDarkProps) => {
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
