import "../../../../assets/css/Header.css"
import InitialsProfileIcon from "../../icons/InitialsProfileIcon";
import TitleIcon from "../../icons/TitleIcon"

function Header() {
    return (
        <div className="Header-main">
            <TitleIcon width={300} />
            <InitialsProfileIcon color="lightgreen" initials="AW" />
        </div>
    )
}

export default Header;