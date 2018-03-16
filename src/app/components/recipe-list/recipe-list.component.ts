import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];
  recipe_in_progress: Recipe;

  constructor(private router: Router) {

    this.recipe_in_progress = Recipe.createBlank();

    this.recipes = [
      Recipe.recipeFromJSON(
        {
        'id': 1,
        'title': 'Блинчики',
        'description': 'Блинчики утренние на молоке и масле',
        'ingredients': [
          {'ingredient': 'молоко', 'measure': '600 гр'},
          {'ingredient': 'яйца', 'measure': '3 шт'},
          {'ingredient': 'мука', 'measure': '300 гр'},
          {'ingredient': 'сахар', 'measure': '2 ч.л.'},
          {'ingredient': 'соль', 'measure': '1 щепотка'},
          {'ingredient': 'масло', 'measure': '2 ст.л.'},
        ],
        'instructions': [
          {'instruction': 'Разбить и взболтать яйца', 'photo': null},
          {'instruction': 'Добавить соль и сахар, смешать', 'photo': null},
          {'instruction': 'Молоко подогреть и влить в яйца', 'photo': null},
          {'instruction': 'Добавить муку и тщательно перемешать', 'photo': null},
          {'instruction': 'Влить масло', 'photo': null},
          {'instruction': 'Дать постоять минут 20', 'photo': null}
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
          {'ingredient': 'молоко', 'measure': '600 гр'},
          {'ingredient': 'яйца', 'measure': '3 шт'},
          {'ingredient': 'мука', 'measure': '300 гр'},
          {'ingredient': 'сахар', 'measure': '2 ч.л.'},
          {'ingredient': 'соль', 'measure': '1 щепотка'},
          {'ingredient': 'масло', 'measure': '2 ст.л.'},
        ],
        'instructions': [
          {'instruction': 'Разбить и взболтать яйца', 'photo': null},
          {'instruction': 'Добавить соль и сахар, смешать', 'photo': null},
          {'instruction': 'Молоко подогреть и влить в яйца', 'photo': null},
          {'instruction': 'Добавить муку и тщательно перемешать', 'photo': null},
          {'instruction': 'Влить масло', 'photo': null},
          {'instruction': 'Дать постоять минут 20', 'photo': null}
        ],
        'feeds_this_many': 4,
        'preporation_time': 60,
        'cover_photo': null,
        'keywords': ['блинчики', 'завтрак']
      },
    )
    ];
  }

  public addRecipeClecked() {
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

  public zoomInOutRecipe(recipe) {
    console.log('opanki');
    console.log(JSON.stringify(recipe, null, 2));
  }

  userClickedOnRecipe(recipe_id): void {
    this.router.navigateByUrl('recipes/' + recipe_id);
  }

  addRecipePressed(): void {
    this.router.navigateByUrl('/editnewrecipe');
  }
}
