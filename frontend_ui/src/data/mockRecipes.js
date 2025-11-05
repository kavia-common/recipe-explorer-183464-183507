export const mockRecipes = [
  {
    id: '1',
    title: 'Lemon Herb Grilled Salmon',
    description: 'Fresh salmon with zesty lemon and aromatic herbs.',
    image: 'https://images.unsplash.com/photo-1604908554007-0661b5f5d3e1?q=80&w=1200&auto=format&fit=crop',
    tags: ['seafood', 'grill', 'healthy'],
    time: 25,
    servings: 2,
    ingredients: [
      '2 salmon fillets',
      '1 lemon (zest + juice)',
      '2 tbsp olive oil',
      '1 tsp dried oregano',
      '1 tsp dried thyme',
      'Salt and pepper to taste'
    ],
    steps: [
      'Preheat grill or grill pan to medium-high.',
      'Whisk olive oil, lemon juice, zest, oregano, thyme, salt, and pepper.',
      'Brush salmon with marinade and rest for 10 minutes.',
      'Grill 3–4 minutes per side until opaque and flaky.',
      'Serve with lemon wedges.'
    ]
  },
  {
    id: '2',
    title: 'Creamy Mushroom Pasta',
    description: 'Silky pasta coated in a rich mushroom cream sauce.',
    image: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop',
    tags: ['vegetarian', 'comfort', 'quick'],
    time: 30,
    servings: 4,
    ingredients: [
      '300g pasta',
      '300g mixed mushrooms, sliced',
      '2 tbsp butter',
      '2 cloves garlic, minced',
      '200ml cream',
      '50g parmesan, grated',
      'Salt and pepper to taste',
      'Parsley for garnish'
    ],
    steps: [
      'Cook pasta in salted boiling water until al dente.',
      'Sauté mushrooms in butter until browned.',
      'Add garlic, cook 1 minute until fragrant.',
      'Pour in cream and simmer to thicken.',
      'Toss with pasta, parmesan, and season.',
      'Garnish with parsley.'
    ]
  },
  {
    id: '3',
    title: 'Spicy Chickpea Buddha Bowl',
    description: 'Protein-packed bowl with roasted chickpeas and veggies.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    tags: ['vegan', 'gluten-free', 'healthy'],
    time: 35,
    servings: 2,
    ingredients: [
      '1 can chickpeas, drained',
      '1 tbsp olive oil',
      '1 tsp paprika',
      '1/2 tsp cumin',
      'Mixed greens',
      'Cherry tomatoes',
      'Cooked quinoa',
      'Tahini dressing'
    ],
    steps: [
      'Toss chickpeas with oil, paprika, and cumin; roast at 200°C for 20 minutes.',
      'Assemble bowls with greens, quinoa, tomatoes, and chickpeas.',
      'Drizzle with tahini dressing.'
    ]
  },
  {
    id: '4',
    title: 'Classic Margherita Pizza',
    description: 'Crispy crust with tomato, mozzarella, and basil.',
    image: 'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=1200&auto=format&fit=crop',
    tags: ['pizza', 'bake', 'classic'],
    time: 20,
    servings: 2,
    ingredients: [
      'Pizza dough',
      '1/2 cup tomato sauce',
      '200g fresh mozzarella',
      'Fresh basil leaves',
      'Olive oil, salt'
    ],
    steps: [
      'Preheat oven to highest setting with a pizza stone if available.',
      'Stretch dough and spread tomato sauce.',
      'Top with sliced mozzarella and basil.',
      'Bake 7–10 minutes until crust is golden.',
      'Finish with olive oil and salt.'
    ]
  }
];

/**
 * PUBLIC_INTERFACE
 * getRecipes - returns the local mock recipes. Placeholder for future API call.
 */
export function getRecipes() {
  /** Returns a list of recipe objects from local mock data. */
  return mockRecipes;
}

/**
 * PUBLIC_INTERFACE
 * getRecipeById - returns a single recipe by id from local mock data.
 */
export function getRecipeById(id) {
  /** Returns a recipe object or undefined if not found. */
  return mockRecipes.find(r => r.id === String(id));
}
