import { Recipe } from './../../model/recipe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-new-recipe',
  templateUrl: './edit-new-recipe.component.html',
  styleUrls: ['./edit-new-recipe.component.css']
})
export class EditNewRecipeComponent implements OnInit {

  recipe_in_progress: Recipe;

  constructor() {
    this.recipe_in_progress = Recipe.createBlank();
    // this.recipe_in_progress.ingredients.push({ingredient: 'i1', measure: 'm1'});
    // this.recipe_in_progress.ingredients.push({ingredient: 'i2', measure: 'm2'});
  }

  ngOnInit() {
  }

  addRecipePressed(): void {
  }

  addIngredientPressed(): void {
    // console.log(JSON.stringify(this.recipe_in_progress, null, 2));
    if (!this.recipe_in_progress.ingredients) {
      this.recipe_in_progress.ingredients = [{ingredient: null, measure: null}];
    } else {
      this.recipe_in_progress.ingredients.push({ingredient: null, measure: null});
    }
  }

}
