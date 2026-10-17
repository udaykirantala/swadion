const API_BASE_URL = "http://localhost:9502";
const BASE_URL = `${API_BASE_URL}/app/swadion/category`;



export const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/GetAllCategorys`);
    const result = await res.json();

    if (!result.success) throw new Error(result.message || "Failed to fetch categories")

    return result.data;
}
export const getCountries = async () => {
    const res = await fetch(`${API_BASE_URL}/app/swadion/countries/GetAllCountries`);
    const result = await res.json();

    if (!result.success) throw new Error(result.message || "Failed to fetch countries")

    return result.data;
}