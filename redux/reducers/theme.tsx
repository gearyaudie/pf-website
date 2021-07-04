import { TOGGLE_THEME_COLOR } from "../types/theme";

type State = {
  themeChange: boolean;
};

type Action = {
  type: string;
  payload: boolean;
};

const initialState: State = {
  themeChange: false,
};

const themeReducer = (state = initialState, action: Action) => {
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
