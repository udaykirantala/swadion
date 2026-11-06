import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Logo from "../../assets/logo.png"
import { useEffect } from "react";
import { fetchCategories } from "../../redux/categoryRedux/CategorySlice";
import { fetchCountries } from "../../redux/countriesRedux/countriesSlice";
import "./Footer.css"
export const Footer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items: Categories, status } = useSelector((state) => state.categories);
    const { items: Countrys, status: countryStatus } = useSelector((state) => state.countries);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCategories());
        }
        if (countryStatus === 'idle') {
            dispatch(fetchCountries());
        }
    }, [dispatch, status])

    const CountrysLinks = Countrys.slice(0, 6);
    const CategoriesLinks = Categories.slice(0, 6);
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
    const bottomBarLinks = [
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Privacy Policy",
            path: "/privacypolicy"
        },
        {
            name: "Terms & Conditions",
            path: "/termsconditions"
        },
    ]
    return (
        <div>

            <div className="footer_continer">
                <div className="nav_logo_continer">
                    <div className="nav_name_logo_continer" onClick={() => navigate('/')}>
                        <img src={Logo} alt="nav_log" className="nav_logo_icons" />
                        <p className="fraunces-semibold footer_logo_name">Swadion</p>
                    </div>
                    <p className="footer_blurd inter-regular">
                        Recipes from every country, with calories and measurements that scale to your table.
                    </p>
                </div>
                <div className="footer_column_explore_continer">
                    <div className="footer_column_explore">
                        <p className="footer_column_heading inter-semibold">EXPLORE</p>
                        <div className="footer_links_continer">
                            {navLinks.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => navigate(item.path)}
                                >
                                    <p className="footer_link inter-regular">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="footer_column_heading inter-semibold">
                            CATEGORIES
                        </p>
                        <div className="footer_links_continer">
                            {CategoriesLinks.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => navigate(`/category/${item.slug}`)}
                                >
                                    <p className="footer_link inter-regular">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="footer_column_heading inter-semibold">
                            COUNTRIES
                        </p>
                        <div className="footer_links_continer">
                            {CountrysLinks.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => navigate(`/country/${item.slug}`)}
                                >
                                    <p className="footer_link inter-regular">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom_bar_continer">
                <div>
                    <p className="copyright_line">© 2026 Swadion. All rights reserved.Nutrition values are estimates per serving.</p>
                </div>
                <div>
                    <div className="bottom_bar_links">
                        {bottomBarLinks.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => navigate(item.path)}
                            >
                                <p className="footer_link inter-regular">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}