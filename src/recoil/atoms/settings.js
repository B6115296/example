const { atom } = require("recoil");

const initialState = {
  currRoute: 0
};

const settingsState = atom({
  key: "settings",
  default: initialState
});

export default settingsState;
