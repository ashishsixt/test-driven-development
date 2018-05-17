import {renderComponent, expect} from "../test_helper";
import CommentList from "../../src/components/comment_list";
const comments = {comments: ["Hello World", "Hello India"]};
describe("comment list", () => {
    let component;

    beforeEach(()=>{
        component = renderComponent(CommentList, null, comments);
    });

    it("shows an LI each comment", () => {
        expect(component.find(li).length).to.equal(2);
    });

    it("shows each comment that is provided", () => {
        expect(component).to.contain(comments.comments[0]);
        expect(component).to.contain(comments.comments[1]);
    });
    
});