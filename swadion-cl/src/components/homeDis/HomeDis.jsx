import { useState } from "react"
import searchLog from "../../assets/search.png"
import "./HomeDis.css"
import { useNavigate } from "react-router-dom";
export const HomeDis = () => {
    const [searchInput,setSearchInput] = useState();
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(searchInput);
        const query = searchInput.trim();
        if(!query) return;
        navigate(`/search?q=${encodeURIComponent(query)}`)
        setSearchInput("")
    }
    return (
        <div>
            <div>
                <h1 className="home_dis_headline fraunces-medium">Every dish has a 
                    <span className="fraunces-medium-italic spcial_text">country</span> 
                    and a story.
                </h1>
            </div>
            <div>
                <p className="home_dis_sub_text inter-regular">
                    Browse recipes by category or cuisine, see calories and macros up front, and cook with measurements that scale to your table.
                </p>
            </div>
            <div className="home_dis_search_continer">
                <img src={searchLog} alt="searchLog" width="20px"/>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="searchInput" 
                    placeholder='Try "butter chicken" or "30 minute dinner"' 
                    value={searchInput} 
                    onChange={(e)=>setSearchInput(e.target.value)}
                    />
                    <button type="submit" className="inter-semibold">Search</button>
                </form>
            </div>
        </div>
    )
}