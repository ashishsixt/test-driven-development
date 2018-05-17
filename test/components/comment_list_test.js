import {renderComponent, expect} from "../test_helper";
import CommentList from "../../src/components/comment_list";
const list = {comments: ["Hello World", "Hello India"]};
describe("Comment List", () => {
    let component;

    beforeEach(()=>{
        component = renderComponent(CommentList, null, list);
    });

    it("shows an LI each comment", () => {
        expect(component.find("li").length).to.equal(2);
    });

    it("shows each comment that is provided", () => {
        expect(component).to.contain(list.comments[0]);
        expect(component).to.contain(list.comments[1]);
    });
    
});