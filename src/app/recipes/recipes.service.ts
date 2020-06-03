import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl: "https://toriavey.com/images/2011/02/TOA20_06.jpg",
      ingredients: ["French Fries", "Pork Meat", "Salad"]
    },
    {
      id: "r2",
      title: "Spaghetti",
      imageUrl: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
      ingredients: ["Spaghetti", "Meat", "Tomatoes"]
    },
    {
      id: "r3",
      title: "Beef Matoke",
      imageUrl: "https://i1.wp.com/yummy.co.ke/wp-content/uploads/2019/05/matoke-beef-stew.jpg?resize=450%2C337&ssl=1",
      ingredients: ["Bananas", "Meat", "Salad"]
    },
    {
      id: "r4",
      title: "Chutney-Glazed Carrots",
      imageUrl: "https://cdn3.tmbi.com/toh/GoogleImages/exps174192_EDSC153431D01_06_2b.jpg",
      ingredients: ["Mango Chutney", "Parsley", "Apple Juice"]
    }
  ];

  constructor () { }

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
