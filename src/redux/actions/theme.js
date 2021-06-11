import TOGGLE_THEME_COLOR from "../types/theme";

export const toggleThemeColor = (action) => {
  return {
    type: TOGGLE_THEME_COLOR,
    payload: action,
  };
};
