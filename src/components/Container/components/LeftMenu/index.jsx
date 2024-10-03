import '../../../../assets/css/LeftMenu.css'
import '../../../../assets/css/All.css'
import HomeIcon from '../../icons/HomeIcon'
import ProfileIcon from '../../icons/ProfileIcon'

function LeftMenu() {
    return (
        <div className="LeftMenu-main">
            <div>
                <HomeIcon></HomeIcon>
                <p>Home</p>
            </div>
            <div>
                <ProfileIcon></ProfileIcon>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default LeftMenu;
