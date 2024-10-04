import Comment from "./components/Comment"
import PostComment from "./components/PostComment"
import "../../../../../../../../../../assets/css/CommentList.css"
import * as API from "../../../../../../../../../../API"
import { createContext, useEffect, useState } from "react"

const CommentCrudContext = createContext()

function CommentList({ postId }) {
    const [comments, setComments] = useState([])
    const [listLimit, setListLimit] = useState(3)

    useEffect(() => async function () {
        setComments((await API.get("post/" + postId + "/comment")).data.reverse());
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
                setComments((await API.get("post/" + postId + "/comment")).data.reverse());
                console.log(comments)
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

    const handleLimit = () => {
        setListLimit(comments.length)
    }

    return (
        <>
            <CommentCrudContext.Provider value={{ getAllComments, addComment }}>
                <div className="CommentList-main">
                    {comments.length > 3 ? <p onClick={handleLimit}>Show previous comments</p> : null}
                    {
                        comments.slice(0, listLimit).reverse().map((comment, ix) => (
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