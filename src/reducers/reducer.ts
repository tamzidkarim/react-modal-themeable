type ThemeStateType = {
  darkTheme: boolean;
};
type UserStateType = {
  username: string;
};

export const themeReducer = (state: ThemeStateType, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      console.log(state.darkTheme);
      return {
        darkTheme: !state.darkTheme,
      };

    default:
      return state;
  }
};

export const userReducer = (state: UserStateType, action: any) => {
  switch (action.type) {
    case "SET_USER":
      console.log(state.username);
      return {
        username: action.username,
      };

    default:
      return state;
  }
};
