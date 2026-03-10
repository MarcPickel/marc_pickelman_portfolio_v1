import "./Header.css";

function Header() {
    return(
        <div className="header">
            {/* A small, rounded image of me with my name */}
            <div className="header__profile-content">
                <img className="header__profile-pic" src="" />
                <p className="profile__text">Marc Pickelman</p>
            </div>
            <div className="header__nav">
                <button className="header__button" type="button" >SEO</button>
                <button className="header__button" type="button" >Literature</button>
                <button className="header__button" type="button" >Linguistics</button>
                <button className="header__button" type="button" >About</button>
            </div>
        </div>
    );
}

export default Header;