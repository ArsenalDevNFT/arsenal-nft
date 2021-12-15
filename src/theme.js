import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

export const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      placeholder: "black"
    },
  },
  textInput: {
    extend: () => `color: black`,

  },
  tab: {
    active: {color: "black", background: "graph-4" },
    disabled: {color: "graph-4"},
    color: "black",
    border: {
      side: "all",
      size: "small",
      color: {
        light: "black",
      }
    },
    background: "accent-4" ,
    pad: "small" 
  },
});
