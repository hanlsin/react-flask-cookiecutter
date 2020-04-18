import { createStore, persist } from "easy-peasy";

import userStateModel from "./models/userStateModel";

export const storeModel = {
  userState: userStateModel,
};

const storeConfig = {
  storage: "localStorage",
};

const store = createStore(persist(storeModel, storeConfig));

export default store;
