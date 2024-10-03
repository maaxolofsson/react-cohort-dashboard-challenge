import "../../../../../../assets/css/CreatePost.css"
import InitialsProfileIcon from "../../../../icons/InitialsProfileIcon"

function CreatePost() {
    return (
        <>
            <div className="CreatePost-main">
                <div className="CreatePost-container">
                    <InitialsProfileIcon color={"lightgreen"} initials={"MO"} />
                    <input type="text" placeholder="What's on your mind?" />
                    <input type="submit" value="Post" />
                </div>
            </div>
        </>
    )
}

export default CreatePost;