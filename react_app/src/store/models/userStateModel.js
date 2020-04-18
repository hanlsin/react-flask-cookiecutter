import { action } from "easy-peasy";

const userStateModel = {
  userInfo: { name: "", email: "", id: "" },
  isUserSet: false,
  setUserInfo: action((state, payload) => {
    state.userInfo.name = payload.name;
    state.userInfo.email = payload.email;
    state.userInfo.id = payload.id;
    state.isUserSet = true;
  }),
};

export default userStateModel;
