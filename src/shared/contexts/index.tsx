import { iChildren } from "../interfaces";
import { AppThemeProvider } from "./ThemeContext";

const Providers = ({ children }: iChildren) => (
  <AppThemeProvider>{children}</AppThemeProvider>
);

export default Providers;
export { useAppThemeContext } from "./ThemeContext";
