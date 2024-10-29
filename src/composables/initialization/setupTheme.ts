import { getOSTheme } from "@/utils";
import { useTheme } from "@utils/theme";

const setupTheme = () => {
  useTheme()
    .createTheme("dark", {
      primary: "95 149 255",
      secondary: "45 49 65",
      error: "255 75 86",
      success: "60 255 138",
      warning: "255 212 100",
      background: "53 53 53",
      "card-background": "31 34 46",
      "text-primary": "255 255 255",
      "text-secondary": "160 160 160",
      "text-tertiary": "102 102 102",
    })
    .createTheme("light", {
      primary: "95 149 255",
      secondary: "217 217 217",
      error: "255 75 86",
      success: "60 255 138",
      warning: "255 212 100",
      background : "208 208 208",
      "card-background" : "255 255 255",
      "text-primary" : "0 0 0",
      "text-secondary" : "102 102 102",
      "text-tertiary" : "160 160 160",
    })
    .activateTheme(getOSTheme());
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      useTheme().activateTheme(getOSTheme())
    });
};

export default setupTheme;
