import Comment from "./components/Comment"
import PostComment from "./components/PostComment"
import "../../../../../../../../../../assets/css/CommentList.css"

function CommentList({ comments }) {
    return (
        <>
            <div className="CommentList-main">
                {
                    comments.map((comment, ix) => (
                        <Comment key={ix} comment={comment} />
                    ))
                }
            </div>
            <PostComment />
        </>
    )
}

export default CommentList;