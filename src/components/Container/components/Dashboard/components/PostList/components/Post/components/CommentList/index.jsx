import Comment from "./components/Comment"
import PostComment from "./components/PostComment"
import "../../../../../../../../../../assets/css/CommentList.css"
import * as API from "../../../../../../../../../../API"
import { createContext, useEffect, useState } from "react"

const CommentCrudContext = createContext()

function CommentList({ postId }) {
    const [comments, setComments] = useState([])

    useEffect(() => async function () {
        setComments((await API.get("post/" + postId + "/comment")).data.toReversed());
    }, [])

    /*
    obj = {
      "postId": int,
      "content": string,
      "contactId": int
    }
  */
    const addComment = async (postId, obj) => {
        const response = await API.post("post/" + postId + "/comment", obj)
        switch (response.httpRes.status) {
            case 201:
                console.log("201 created")
                setComments(await getAllComments(postId));
                break;
            case 400:
                console.log("400 bad request")
                break;
            case 401:
                console.log("401 username provided not part of boolean org")
                break;
            default:
                console.log("Unknown status code received in addComment.")
        }
        console.log(response)
        return response
    }

    const getAllComments = async (postId) => {
        const response = await API.get("post/" + postId + "/comment")
        switch (response.httpRes.status) {
            case 200:
                console.log("200 ok")
                break;
            case 400:
                console.log("400 bad request")
                break;
            case 401:
                console.log("401 username provided not part of boolean org")
                break;
            default:
                console.log("Unknown status code received in getAllComments.")
        }
        console.log(response)
        return response.data
    }

    return (
        <>
            <CommentCrudContext.Provider value={{ getAllComments, addComment }}>
                <div className="CommentList-main">
                    {
                        comments.map((comment, ix) => (
                            <Comment key={ix} comment={comment} />
                        ))
                    }
                </div>
                <PostComment postId={postId} />
            </CommentCrudContext.Provider>
        </>
    )
}

export { CommentList, CommentCrudContext };