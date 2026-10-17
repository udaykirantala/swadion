import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../redux/categoryRedux/CategorySlice";
import { CategoryIcon } from "../categoryIcon/CategoryIcon";
import './BrowseByCategory.css'
export const BrowseByCategory = () => {
    const dispatch = useDispatch();
    const { items: categories, status, error } = useSelector((state) => state.categories)

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCategories())
        }
    }, [status, dispatch])

    console.log(categories);

    return (
        <div>
            <div className="category_heading fraunces-medium">
                <h2>Browse by category</h2>
            </div>
            {status === 'loading' ? (
                <h2>Loading</h2>
            ) : (
                <div className="category_continer">
                    {categories.map((cat) => (
                        <div key={cat._id} className="cat_tile" onClick={() => navigate(`/category/${cat.slug}`)}>
                            <div
                                className="cat_tile_jar"
                                style={{
                                    background: `var(--ramp-${cat.colorTheme}-bg)`,
                                    "--category-border": `var(--ramp-${cat.colorTheme}-border)`
                                }}
                            >
                                <CategoryIcon icon={cat.icon} name={cat.name} size={22} />
                            </div>
                            <div>
                                <p className="cat_tile_name fraunces-medium">{cat.name}</p>
                                <p className="cat_tile_count ibm-plex-mono-medium">2 recipes</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}