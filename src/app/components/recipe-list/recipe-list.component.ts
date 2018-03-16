import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];
  recipe_in_progress: Recipe;
  
  constructor() {

    this.recipe_in_progress = Recipe.createBlank();

    this.recipes = [
      // obj.id,
			// obj.title,
			// obj.description,
			// obj.engredients,
			// obj.instructions,
			// obj.feeds_this_many,
			// obj.preporation_time,
			// obj.cover_photo,
      // obj.keywords
      Recipe.recipeFromJSON({
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
      });

      // new Recipe(1, 'Блинчики', 'Любимые блинчики на молоке и масле.', null, null, 4, 60, null, []),
      // new Recipe(2, 'Шашлык', 'Из свинной шейки на углях.', null, null, 2, 120, null, []),
      // new Recipe(3, 'Баранина тушенная с картошкой', 'Баранина кусками с крупными кусками картошки, лука и маркови, запеченная в духовки с бульоном из бараньей косточки со специями.', null, null, 6, 360, null, []),
    ];
   
  }

  public addRecipeClecked(){
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

  public zoomInOutRecipe(recipe) {
    console.log('opanki');
    console.log(JSON.stringify(recipe, null, 2));
  }

}
