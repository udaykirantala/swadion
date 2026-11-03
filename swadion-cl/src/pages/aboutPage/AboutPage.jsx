import { useNavigate } from "react-router-dom"
import "./AboutPage.css"
export const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <div className="about_page_continer">
            <p className="browse_back inter-regular" onClick={() => navigate("/")}>← Back to home</p>
            <div>
                <p className="about_page_heding fraunces-medium">About Swadion</p>
                <p className="about_section_paragraph inter-regular">Swadion is a cookbook of dishes from around the world. Browse by category or country, 
                see calories and macros up front, and scale every ingredient to the number of people you are cooking for.</p>
            </div>
            <div>
                <p className="about_section_heding fraunces-medium">What you will find here</p>
                <ul>
                    <li className="inter-regular">Recipes sorted by category (vegetarian, non-veg, dessert, vegan, breakfast and beverages) and by country.</li>
                    <li className="inter-regular">Calories, protein, carbs and fat for every serving.</li>
                    <li className="inter-regular">Ingredient amounts that change with the number of servings.</li>
                    <li className="inter-regular">Step-by-step instructions, with a video tutorial where we have one.</li>
                </ul>
            </div>
            <div>   
                <p className="about_section_heding fraunces-medium">A note on nutrition</p>
                <p className="about_section_paragraph inter-regular">Nutrition values are estimates per serving. Treat them as a guide, not as medical or dietary advice.</p>
            </div>
            <div>
                <p className="about_section_heding fraunces-medium">Get in touch</p>
                <p className="about_section_paragraph inter-regular">Found a mistake, or want to see a recipe on the site? Visit the 
                    <span className="link_inside_text" onClick={()=>navigate("/contact")}>Contact page.</span>
                </p>
            </div>
        </div>
    )
}