import "../../../../../../../../../../../../assets/css/Comment.css"
import "../../../../../../../../../../icons/InitialsProfileIcon"
import InitialsProfileIcon from "../../../../../../../../../../icons/InitialsProfileIcon";

function Comment() {
    return (
        <div className="Comment-main">
            <div>
                <InitialsProfileIcon color={"lightblue"} initials={"MO"}></InitialsProfileIcon>
            </div>


            <div className="Comment-author-text-container">
                <h4>Author Authorsson</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores harum veritatis fugit corporis in, alias unde commodi. Voluptates quae ratione aut doloremque quo dolore. Laborum magni perspiciatis hic molestiae.</p>
            </div>
        </div>
    )
}

export default Comment;