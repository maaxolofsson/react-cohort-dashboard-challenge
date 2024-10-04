import { useContext } from "react";
import "../../../../assets/css/Header.css"
import InitialsProfileIcon from "../../icons/InitialsProfileIcon";
import TitleIcon from "../../icons/TitleIcon"
import { LoggedInContactContext } from "../../../../App";

function Header() {
    const loggedInContactContext = useContext(LoggedInContactContext)
    const { loggedInContact } = loggedInContactContext
    console.log(loggedInContact)
    return (
        <div className="Header-main">
            <TitleIcon width={300} />
            <InitialsProfileIcon
                color={loggedInContact.favouriteColour}
                initials={loggedInContact.firstName.charAt(0) + loggedInContact.lastName.charAt(0)}
            />
        </div>
    )
}

export default Header;