// Add event listeners to the buttons
document.getElementById('get-category-data').addEventListener('click', getCategoriesData);
document.getElementById('get-ingredient-data').addEventListener('click', getIngredientData);

// Function to fetch meal data for a specific category (e.g., seafood)
async function getCategoriesData() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Print the result into the console
    } catch (error) {
        console.error('Fetch error: ', error);
        console.log('something went wrong');
    }
}

// Function to fetch meal data where the main ingredient is chicken_breast
async function getIngredientData() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Print the result into the console
    } catch (error) {
        console.error('Fetch error: ', error);
        console.log('something went wrong');
    }
}
