import { Recipe } from './../model/recipe';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const RECIPE_SERVER = 'http://localhost:8080';

@Injectable()
export class RecipeService {

  recipes: Recipe[];

  constructor(private http: Http) {
    /*
    this.recipes = [
      Recipe.recipeFromJSON(
        {
          'id': 1,
          'title': 'Блинчики',
          'description': 'Блинчики утренние на молоке и масле',
          'ingredients': [
            { 'ingredient': 'молоко', 'measure': '600 гр' },
            { 'ingredient': 'яйца', 'measure': '3 шт' },
            { 'ingredient': 'мука', 'measure': '300 гр' },
            { 'ingredient': 'сахар', 'measure': '2 ч.л.' },
            { 'ingredient': 'соль', 'measure': '1 щепотка' },
            { 'ingredient': 'масло', 'measure': '2 ст.л.' },
          ],
          'instructions': [
            { 'instruction': 'Разбить и взболтать яйца', 'photo': null },
            { 'instruction': 'Добавить соль и сахар, смешать', 'photo': null },
            { 'instruction': 'Молоко подогреть и влить в яйца', 'photo': null },
            { 'instruction': 'Добавить муку и тщательно перемешать', 'photo': null },
            { 'instruction': 'Влить масло', 'photo': null },
            { 'instruction': 'Дать постоять минут 20', 'photo': null }
          ],
          'feeds_this_many': 4,
          'preporation_time': 60,
          'cover_photo': null,
          'keywords': ['блинчики', 'завтрак']
        }),
      Recipe.recipeFromJSON({
        'id': 2,
        'title': 'Шашлык',
        'description': 'Из свинины на углях',
        'ingredients': [
          { 'ingredient': 'молоко', 'measure': '600 гр' },
          { 'ingredient': 'яйца', 'measure': '3 шт' },
          { 'ingredient': 'мука', 'measure': '300 гр' },
          { 'ingredient': 'сахар', 'measure': '2 ч.л.' },
          { 'ingredient': 'соль', 'measure': '1 щепотка' },
          { 'ingredient': 'масло', 'measure': '2 ст.л.' },
        ],
        'instructions': [
          { 'instruction': 'Разбить и взболтать яйца', 'photo': null },
          { 'instruction': 'Добавить соль и сахар, смешать', 'photo': null },
          { 'instruction': 'Молоко подогреть и влить в яйца', 'photo': null },
          { 'instruction': 'Добавить муку и тщательно перемешать', 'photo': null },
          { 'instruction': 'Влить масло', 'photo': null },
          { 'instruction': 'Дать постоять минут 20', 'photo': null }
        ],
        'feeds_this_many': 4,
        'preporation_time': 60,
        'cover_photo': null,
        'keywords': ['блинчики', 'завтрак']
      },
      ),
      Recipe.recipeFromJSON({
        'id': 3,
        'title': 'Пирожки',
        'description': 'Пуховые с начинкой (разной)',
        'ingredients': [
          { 'ingredient': 'молоко', 'measure': '600 гр' },
          { 'ingredient': 'яйца', 'measure': '3 шт' },
          { 'ingredient': 'мука', 'measure': '300 гр' },
          { 'ingredient': 'сахар', 'measure': '2 ч.л.' },
          { 'ingredient': 'соль', 'measure': '1 щепотка' },
          { 'ingredient': 'масло', 'measure': '2 ст.л.' },
        ],
        'instructions': [
          { 'instruction': 'Разбить и взболтать яйца', 'photo': null },
          { 'instruction': 'Добавить соль и сахар, смешать', 'photo': null },
          { 'instruction': 'Молоко подогреть и влить в яйца', 'photo': null },
          { 'instruction': 'Добавить муку и тщательно перемешать', 'photo': null },
          { 'instruction': 'Влить масло', 'photo': null },
          { 'instruction': 'Дать постоять минут 20', 'photo': null }
        ],
        'feeds_this_many': 4,
        'preporation_time': 60,
        'cover_photo': null,
        'keywords': ['блинчики', 'завтрак']
      },
      )
    ];
  */
  }

  getAllRecipes(): Promise<Recipe[]> {
    return this.http
      .get(RECIPE_SERVER + '/v1/recipes.json')
      .toPromise()
      .then(response => response.json().data as Recipe[])
      .catch(this.HandleError);
    /*
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.recipes);
      }, 0);
    });
    */
  }

  getRecipeById(recipe_id: number): Promise<Recipe> {
    return this.http
      .get(RECIPE_SERVER + `/v1/recipes/${recipe_id}.json`)
      .toPromise()
      .then(response => response.json().data as Recipe)
      .catch(this.HandleError);
    /*
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        for (const recipe of this.recipes) {
          if (recipe.id === recipe_id) {
            resolve(recipe);
            return;
          }
        }
        reject(Error('No recipe exists with that ID'));
      }, 0);
    });
    */
  }

  addNewRecipe(recipe: Recipe): Promise<Recipe> {
    return this.http
      .put(RECIPE_SERVER + '/v1/recipes.json', recipe)
      .toPromise()
      .then(response => response.json().data as Recipe)
      .catch(this.HandleError);
    // this.recipes.push(recipe);
  }

  private HandleError(error: any): Promise<any> {
    console.error('Error: ' + error);
    return Promise.reject(error.message || error);
  }

}
