// Collections are built automatically from fields every recipe already has
// (time, nutrition, diet flags, createdAt). Nothing to store, no login, no new API.
// To add a collection, add one object here — the page picks it up.

const newestFirst = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

export const COLLECTIONS = [
    {
        id: "quick",
        title: "Ready in 30 minutes",
        description: "Fast dinners, breakfasts and drinks for when time is short.",
        filter: (r) => r.totalTimeMinutes > 0 && r.totalTimeMinutes <= 30,
        sort: (a, b) => a.totalTimeMinutes - b.totalTimeMinutes,
    },
    {
        id: "vegetarian",
        title: "Vegetarian",
        description: "Meat-free dishes from every cuisine.",
        filter: (r) => r.isVegetarian,
        sort: newestFirst,
    },
    {
        id: "vegan",
        title: "Vegan",
        description: "Fully plant-based, with no dairy or eggs.",
        filter: (r) => r.isVegan,
        sort: newestFirst,
    },
    {
        id: "light",
        title: "Light meals",
        description: "300 calories or fewer per serving.",
        filter: (r) => (r.nutrition?.calories ?? 0) > 0 && r.nutrition.calories <= 300,
        sort: (a, b) => a.nutrition.calories - b.nutrition.calories,
    },
    {
        id: "protein",
        title: "High protein",
        description: "20 g or more of protein per serving.",
        filter: (r) => (r.nutrition?.protein ?? 0) >= 20,
        sort: (a, b) => b.nutrition.protein - a.nutrition.protein,
    },
    {
        id: "new",
        title: "New recipes",
        description: "The most recently added.",
        filter: () => true,
        sort: newestFirst,
        limit: 6,
    },
];

// recipes in -> [{ id, title, description, recipes: [...] }] out. Empty collections are dropped.
export const buildCollections = (recipes = []) =>
    COLLECTIONS.map(({ filter, sort, limit, ...meta }) => {
        const matched = recipes.filter(filter).sort(sort);   // filter() returns a new array, so sorting it is safe
        return { ...meta, recipes: limit ? matched.slice(0, limit) : matched };
    }).filter((c) => c.recipes.length > 0);