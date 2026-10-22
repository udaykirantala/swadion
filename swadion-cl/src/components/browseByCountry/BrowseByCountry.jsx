import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCountries } from "../../redux/countriesRedux/countriesSlice";
import "./BrowseByCountry.css";
import { useNavigate } from "react-router-dom";

export const BrowseByCountry = () => {
    const dispatch = useDispatch();
    const { items: countries, status, error } = useSelector((state) => state.countries);
    const navigate = useNavigate();
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCountries())
        }
    }, [status, dispatch])
    return (
        <div>
            <div className="countires_heading fraunces-medium">
                <h2>Browse by country</h2>
            </div>
            {
                status === 'loading' || countries.length === 0 ? (
                    <h1>Loading</h1>
                ) : (
                    <div className="countries_continer">
                        {countries.map((coun) => (
                            <div key={coun._id} className="countrie_chip inter-regular" onClick={() => navigate(`/country/${coun.slug}`)}>
                                <p>{coun.name}</p>
                            </div> 
                        ))}
                    </div>
                )
            }
        </div>
    )
}