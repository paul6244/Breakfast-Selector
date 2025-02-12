const breakfastRecipes = {
    'Eggs': [
        'Crack the eggs into a bowl and beat them lightly with a fork.',
        'Add salt and pepper to taste.',
        'Heat a small amount of butter or oil in a pan over medium heat.',
        'Pour the eggs into the pan and cook, stirring gently, until they reach the desired consistency.'
    ],
    'Croissant': [
        'Preheat the oven to the temperature specified on the croissant package.',
        'Place the croissants on a baking sheet.',
        'Bake according to the package instructions until golden brown.',
        'Let them cool slightly before serving.'
    ],
    'Pancakes': [
        'Mix flour, sugar, baking powder, and salt in a bowl.',
        'Whisk milk, eggs, and melted butter in another bowl.',
        'Pour the wet ingredients into the dry ingredients and mix.',
        'Heat a skillet over medium heat and pour batter to form pancakes.',
        'Cook until bubbles form on the surface, then flip and cook until golden brown.'
    ],
    'Porridge': [
        'Combine oats, milk (or water), and a pinch of salt in a saucepan.',
        'Bring the mixture to a boil over medium-high heat, stirring occasionally.',
        'Reduce the heat to low and simmer, stirring frequently, until thickened (about 5-10 minutes).',
        'Serve with your choice of sweetener, fruit, nuts, or spices.'
    ],
    'Fruit Salad': [
        'Wash and chop a variety of fresh fruits (e.g., apples, bananas, berries, melons).',
        'Combine the chopped fruits in a large bowl.',
        'Add a squeeze of lemon juice and a drizzle of honey, if desired.',
        'Toss gently to mix and serve immediately.'
    ]
};

document.getElementById('confirmButton').addEventListener('click', function(event) {
    event.preventDefault();
    showRecipe();
});

function showRecipe() {
    const form = document.getElementById('breakfastForm');
    const formData = new FormData(form);
    const selectedBreakfast = formData.get('breakfast');
    console.log(`Selected Breakfast: ${selectedBreakfast}`);
    const steps = breakfastRecipes[selectedBreakfast];

    if (steps) {
        let stepsList = '<ol>';
        steps.forEach(step => {
            stepsList += `<li>${step}</li>`;
        });
        stepsList += '</ol>';
        
        document.getElementById('recipeSteps').innerHTML = stepsList;
    } else {
        document.getElementById('recipeSteps').innerHTML = 'Recipe not found!';
    }
}




  
