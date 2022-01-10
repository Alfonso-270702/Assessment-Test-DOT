import { DETAIL_POKEMON } from "../actions/types";

const initialstate = {
  detail: {},
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case DETAIL_POKEMON:
      return { ...state, detail: action.payload };

    default:
      return state;
  }
};
