import {expect} from "../test_helper";
import commentReducer from "../../src/reducers/comment";
import {types as TYPES} from "../../src/actions/types";

describe("Comment Reducer", () => {
    it("handle action of unknow type", () => {
        expect(commentReducer()).to.be.instanceOf(Array);
        expect(commentReducer()).to.eql([]);
    });

    it("handles action of type SAVE_COMMENT", () => {

    });
});