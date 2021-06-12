import { TOGGLE_THEME_COLOR } from "../types/theme";

export const toggleThemeColor = (state) => {
  return {
    type: TOGGLE_THEME_COLOR,
    payload: state,
  };
};
