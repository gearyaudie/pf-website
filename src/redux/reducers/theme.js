import { TOGGLE_THEME_COLOR } from "../types/theme";

const initialState = {
  themeChange: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME_COLOR:
      return {
        ...state,
        themeChange: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
