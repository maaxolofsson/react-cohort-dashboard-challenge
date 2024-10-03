import "../../../../../../../../../../../../assets/css/PostComment.css"
import InitialsProfileIcon from "../../../../../../../../../../icons/InitialsProfileIcon"

function PostComment() {
    return (
        <div className="PostComment-main">
            <InitialsProfileIcon color={"lightgreen"} initials={"AW"} />
            <input type="text" placeholder="Add a comment..." />
            <input type="submit" value="Post" />
        </div>
    )
}

export default PostComment;