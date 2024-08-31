// theme.js または theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "30em",  // Small devices (30em = 480px)
    md: "48em",  // Medium devices (48em = 768px)
    lg: "62em",  // Large devices (62em = 992px)
    xl: "80em",  // Extra large devices (80em = 1280px)
  },
  // 他のカスタマイズ設定があればここに追加
});

export default theme;
