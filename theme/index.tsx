"use client";

import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Bebas_Neue } from "next/font/google";
import { PropsWithChildren, useEffect, useMemo } from "react";

const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const getDesignTokens = (mode: "light" | "dark") => ({
  typography: {
    fontFamily: bebas.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: ".7rem",
          fontFamily: bebas.style.fontFamily,
          fontSize: "16px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontFamily: `${bebas.style.fontFamily}`,
          fontSize: "16px",
        },
      },
    },
  },

  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#0B7EBD" },
          text: { primary: "#000000" },
        }
      : {
          primary: { main: "#0B7EBD" },
          text: { primary: "#ffffff" },
        }),
  },
});

export function ThemeWrapper({ children }: PropsWithChildren) {
  const { theme, systemTheme, setTheme } = useTheme(); // Get current theme from next-themes

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      const defaultTheme = systemTheme || "light";
      setTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
    }
  }, []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const mode = resolvedTheme === "dark" ? "dark" : "light";

  // Create MUI theme dynamically
  const muiTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <MUIThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export function CustomThemeProvider({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeWrapper>{children}</ThemeWrapper>
    </NextThemesProvider>
  );
}
