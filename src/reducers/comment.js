import { types as TYPES } from "../actions/types";
export default function (state = [], action) {
    switch (action.type) {
        case TYPES.SAVE_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}