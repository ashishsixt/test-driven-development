import {types as TYPES} from "./types";

export function saveComment(comment) {
    const data = {
        payload: comment,
        type: TYPES.SAVE_COMMENT
    };
    return data;
}