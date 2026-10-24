import { useState } from "react";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search.png";
import bookmarkIcon from "../../assets/bookmark.png";
import "./SideNavBar.css";
import { useLocation, useNavigate } from "react-router-dom"
export const SideNavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navLinks = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Browse",
            path: "/browse"
        },
        {
            name: "Collections",
            path: "/collections"
        },
    ]
    const [searValue, setSearValue] = useState();
    const handleSearch = (e) => {
        e.preventDefault()
        const query = searValue.trim();
        if (!query) return;
        navigate(`/search?q=${encodeURIComponent(query)}`)
        setSearValue("")
    }

    return (
        <div className="nav_continer inter-regular">
            <div className="nav_logo_links_continer">
                <div className="nav_logo_continer">
                    <div className="nav_name_logo_continer" onClick={()=>navigate('/')}>
                        <img src={Logo} alt="nav_log" className="nav_logo_icons" />
                        <p className="fraunces-semibold nav_logo_name">Swadion</p>
                    </div>
                </div>
                <div className="nav_links_continer">
                    {navLinks.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`nav_link_item ${location.pathname === item.path ? "active" : ""}`}
                        >
                            <p className="nav_link inter-regular">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="nav_search_save_continer">
                <div className="nav_search_continer">
                    <img src={SearchIcon} alt="searchIcon" />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="searchGlo"
                            value={searValue}
                            onChange={(e) => setSearValue(e.target.value)}
                            placeholder="Search dishes, ingredients..."
                        />
                        <button type="submit" className="inter-semibold">Search</button>
                    </form>
                </div>
                {/* <button className="saved_btn" onClick={() => navigate('/saved')}>
                    <img src={bookmarkIcon} alt="bookmark" />
                </button> */}
            </div>
        </div>
    )
}