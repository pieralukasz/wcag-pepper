import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

const withThemeProvider = (Story, context) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "2.6em",
      },
      h2: {
        fontSize: "2em",
      },
      h3: {
        fontSize: "1.6em",
      },
    },
  });

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </EmotionThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
