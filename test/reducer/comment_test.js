import {expect} from "../test_helper";
import commentReducer from "../../src/reducers/comment";
import {types as TYPES} from "../../src/actions/types";

const newComment = "new comment";
describe("Comment Reducer", () => {
    it("handle action of unknow type", () => {
        expect(commentReducer(undefined, {})).to.eql([]);
    });

    it("handles action of type SAVE_COMMENT", () => {
        let action = {type: TYPES.SAVE_COMMENT, payload: newComment};
        expect(commentReducer([], action)).to.eql([newComment]);
    });
});