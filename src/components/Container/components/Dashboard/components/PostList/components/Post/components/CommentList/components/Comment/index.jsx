import "../../../../../../../../../../../../assets/css/Comment.css"
import "../../../../../../../../../../icons/InitialsProfileIcon"
import InitialsProfileIcon from "../../../../../../../../../../icons/InitialsProfileIcon";
import * as API from "../../../../../../../../../../../../API"
import { useEffect, useState } from "react";

function Comment({ comment }) {
    const [contact, setContact] = useState()

    useEffect(() => async function () {
        console.log("HEJHJEHJEHJJH")
    })

    return (
        <div className="Comment-main">
            <div>
                <InitialsProfileIcon color={"lightblue"} initials={"MO"}></InitialsProfileIcon>
            </div>

            <div className="Comment-author-text-container">
                <h4>{comment.contactId}, {contact.firstName} {contact.lastName}</h4>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default Comment;