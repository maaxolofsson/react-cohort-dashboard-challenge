import "../../../../../../../../assets/css/Post.css"
import "../../../../../../icons/InitialsProfileIcon"
import InitialsProfileIcon from "../../../../../../icons/InitialsProfileIcon";

function Post() {
    return (
        <div className="Post-main">
            <div className="Post-container">
                <div className="Post-image-author-title-container">
                    <InitialsProfileIcon color="lightblue" initials="MO"></InitialsProfileIcon>
                    <div className="Post-author-title">
                        <h3>Max Olofsson</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veritatis provident unde porro maiores quisquam? Dolorum numquam quia ipsa minima possimus iusto exercitationem,
                    acere aperiam accusantium libero perferendis! Cum, nulla architecto!</p>
                <hr />
            </div>
        </div>
    )
}

export default Post;