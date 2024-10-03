import Comment from "./components/Comment"
import PostComment from "./components/PostComment"
import "../../../../../../../../../../assets/css/CommentList.css"

function CommentList() {
    return (
        <>
            <div className="CommentList-main">
                <Comment></Comment>
            </div>
            <PostComment />
        </>
    )
}

export default CommentList;