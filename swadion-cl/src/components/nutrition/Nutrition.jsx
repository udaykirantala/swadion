import "./Nutrition.css"
export const Nutrition = ({ nutrition }) => {
    if (!nutrition) {
        return <p>Nutrition information unavailable.</p>;
    }

    return (
        <div className="recipes_details_nutrition">
            {Object.entries(nutrition).map(([key, value]) => (
                <div key={key} className="recipes_nutrition_card">
                    <p className="nutrition_value ibm-plex-mono-medium">
                        {value}
                        {key === "calories" ? "" : "g"}
                    </p>
                    <span className="nutrition_value_name inter-regular">
                        {key.toUpperCase()}
                    </span>
                </div>
            ))}
        </div>
    );
};