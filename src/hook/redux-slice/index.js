import blogData from "./blog-data";
import featureData from "./feature-data";
import user from "./user";
import { combineReducers } from "@reduxjs/toolkit";
const Reducer = combineReducers({
  Feature: featureData,
  Blog: blogData,
  User: user
});

export default Reducer;
