import TOGGLE_THEME_COLOR from "../types/theme";

const initialState = {
    themeChange: false
}

export const themeReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_THEME_COLOR:
            return {
                ...state,
                themeChange: !state.themeChange
            }
        default:
            return state;
    }
}
