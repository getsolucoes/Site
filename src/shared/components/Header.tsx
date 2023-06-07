import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Fab,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  ThemeProvider,
  Toolbar,
  Tooltip,
  Typography,
  createTheme,
  useTheme,
} from "@mui/material";
import { useAppThemeContext } from "../contexts";
import { Raleway } from "next/font/google";
import {
  Close,
  DarkMode,
  LightMode,
  Menu,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "./Link";
import { GDark, GLigth, GetDark, GetLigth } from "./get";
import { useCallback, useState } from "react";

const raleway = Raleway({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const Header = () => {
  const oldTheme = useTheme();
  const theme = createTheme({
    ...oldTheme,
    palette: {
      ...oldTheme.palette,
      success: { main: "#25d366" },
      info: { main: "#fff" },
    },
    typography: { fontFamily: raleway.style.fontFamily },
  });
  const { themeName, toggleTheme } = useAppThemeContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppBar component="nav" color="default">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap={2}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={toggleDrawerOpen}
                  sx={{ display: { xs: "flex", md: "none" } }}
                >
                  <Menu />
                </IconButton>
                <Link href="/" display="flex">
                  {themeName === "light" ? (
                    <GetLigth size={10} />
                  ) : (
                    <GetDark size={10} />
                  )}
                </Link>
              </Box>
              <Box
                flex={1}
                justifyContent="flex-end"
                gap={3}
                sx={{ display: { xs: "none", md: "flex" } }}
                px={5}
              >
                <Typography
                  component={Link}
                  variant="body2"
                  href="/"
                  underline="hover"
                >
                  Quem somos
                </Typography>
                <Typography
                  component={Link}
                  variant="body2"
                  href="/"
                  underline="hover"
                >
                  Soluções
                </Typography>
                <Typography
                  component={Link}
                  variant="body2"
                  fontWeight={700}
                  href="/"
                  underline="hover"
                >
                  Para empresas
                </Typography>{" "}
                <Typography
                  component={Link}
                  variant="body2"
                  fontWeight={700}
                  href="/"
                  underline="hover"
                >
                  Portfólio
                </Typography>
                <Typography
                  component={Link}
                  variant="body2"
                  fontWeight={700}
                  href="/"
                  underline="hover"
                >
                  Dúvidas
                </Typography>
                <Typography
                  component={Link}
                  variant="body2"
                  fontWeight={700}
                  href="/"
                  underline="hover"
                >
                  Blog
                </Typography>
              </Box>
              <Tooltip title="Definir Tema">
                <IconButton
                  color={themeName === "light" ? "primary" : "secondary"}
                  onClick={toggleTheme}
                  sx={{ p: 0 }}
                >
                  {themeName === "light" ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Tooltip>
              <Button
                color={themeName === "light" ? "primary" : "secondary"}
                variant="contained"
                LinkComponent={Link}
                href="/"
                endIcon={themeName === "light" ? <GLigth /> : <GDark />}
                sx={{
                  display: { xs: "none", md: "flex" },
                  ml: theme.spacing(3),
                }}
              >
                Seja cliente
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{ display: { xs: "unset", md: "none" } }}
        open={isDrawerOpen}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100vh"
          display="flex"
          flexDirection="column"
        >
          <Container maxWidth="xl">
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
            >
              <Link href="/" display="flex">
                {themeName === "light" ? (
                  <GetLigth size={10} />
                ) : (
                  <GetDark size={10} />
                )}
              </Link>
              <IconButton size="small" onClick={toggleDrawerOpen}>
                <Close />
              </IconButton>
            </Box>
          </Container>

          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton LinkComponent={Link} href="/">
                <ListItemText primary="Quem somos" />
              </ListItemButton>
              <ListItemButton LinkComponent={Link} href="/">
                <ListItemText primary="Soluções" />
              </ListItemButton>
              <ListItemButton LinkComponent={Link} href="/">
                <ListItemText primary="Para empresas" />
              </ListItemButton>
              <ListItemButton LinkComponent={Link} href="/">
                <ListItemText primary="Portfólio" />
              </ListItemButton>
              <ListItemButton LinkComponent={Link} href="/">
                <ListItemText primary="Dúvidas" />
              </ListItemButton>
              <ListItemButton LinkComponent={Link} href="/">
                <ListItemText primary="Blog" />
              </ListItemButton>
            </List>
          </Box>
          <Box display="flex" justifyContent="center" p={2}>
            <Button
              color={themeName === "light" ? "primary" : "secondary"}
              variant="contained"
              LinkComponent={Link}
              href="/"
              endIcon={themeName === "light" ? <GLigth /> : <GDark />}
            >
              Seja cliente
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box position="fixed" bottom={15} right={15}>
        <Fab
          LinkComponent={Link}
          href="https://wa.me/5588996931410"
          target="_blank"
          color="success"
        >
          <WhatsApp color="info" fontSize="large" />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};
