import { expect } from "../test_helper";
import {types as TYPES} from "../../src/actions/types";
import {saveComment} from "../../src/actions";
const new_comment = "Hello Bangalore";
describe("Actions", () => {
    describe("save comment", () => {
        it("has the correct type", ()=>{
            const action = saveComment();
            expect(action.type).to.equal(TYPES.SAVE_COMMENT);
        });

        it("has the correct payload", ()=>{
            const action = saveComment(new_comment);
            expect(action.payload).to.equal(new_comment);
        });
    });
});