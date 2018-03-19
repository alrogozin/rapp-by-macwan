import { RecipeService } from './../../services/recipe.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  recipe_loaded: boolean;

  ngOnInit() {
    this.recipe_service.getAllRecipes()
      .then((recipes) => {
        this.recipes = recipes;
        this.recipe_loaded = true;
      });
  }
  constructor(private router: Router, private recipe_service: RecipeService) {
  }

  public zoomInOutRecipe(recipe) {
    console.log(JSON.stringify(recipe, null, 2));
  }

  userClickedOnRecipe(recipe_id): void {
    this.router.navigateByUrl('recipes/' + recipe_id);
  }

  addRecipePressed(): void {
    this.router.navigateByUrl('/editnewrecipe');
  }
}
