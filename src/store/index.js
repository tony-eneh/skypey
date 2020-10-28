import { initial } from "lodash";
import { createStore } from "redux";
import { reducer } from "../reducers";
import { state } from "../static-data";

export const store = createStore(reducer, state);
