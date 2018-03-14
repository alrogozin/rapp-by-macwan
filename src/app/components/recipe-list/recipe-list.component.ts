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
      new Recipe('Блинчики', 'Любимые блинчики на молоке и масле.', null, null, null, 4, 60),
      new Recipe('Шашлык', 'Из свинной шейки на углях.', null, null, null, 2, 120),
      new Recipe('Баранина тушенная с картошкой', 'Баранина кусками с крупными кусками картошки, лука и маркови, запеченная в духовки с бульоном из бараньей косточки со специями.', null, null, null, 6, 360),
    ];
  }

  public addRecipeClecked(){
    console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    this.recipes.unshift(this.recipe_in_progress);
    this.recipe_in_progress = Recipe.createBlank();
  }

}
