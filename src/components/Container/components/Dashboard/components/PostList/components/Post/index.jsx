import "../../../../../../../../assets/css/Post.css"
import "../../../../../../icons/InitialsProfileIcon"
import InitialsProfileIcon from "../../../../../../icons/InitialsProfileIcon";
import CommentList from "./components/CommentList"
import { useContext, useEffect, useState } from "react";
import * as API from "../../../../../../../../API"

function Post({ post }) {
    const [comments, setComments] = useState([])

    useEffect(() => async function () {
        setComments((await API.get("post/" + post.id + "/comment")).data);
    }, [])

    return (
        <div className="Post-main">
            <div className="Post-container">
                <div className="Post-image-author-title-container">
                    <InitialsProfileIcon color="lightblue" initials="MO"></InitialsProfileIcon>
                    <div className="Post-author-title">
                        <h3>Max Olofsson</h3>
                        <p>{post.title}</p>
                    </div>
                </div>
                <p>{post.content}</p>
                <hr />
                <CommentList comments={comments}></CommentList>
            </div>
        </div>
    )
}

export default Post;