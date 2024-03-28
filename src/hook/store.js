import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./redux-slice";

const Store = configureStore({
  reducer: Reducer,
});
export default Store;
