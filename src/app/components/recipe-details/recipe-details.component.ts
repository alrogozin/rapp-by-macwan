import { RecipeService } from './../../services/recipe.service';
import { Recipe } from './../../model/recipe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;
  recipe_loaded: boolean;
  load_error: boolean;
  error_text: string;

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private recipe_service: RecipeService
    ) {
      this.load_error = false;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        const recipe_id = parseInt(params.get('recipe_id'), 10);
        this.recipe_service.getRecipeById(recipe_id)
          .then((recipe) => {
            this.recipe = recipe;
          })
          .catch((err) => {
            this.load_error = true;
            const body = JSON.parse(err.body);
            this.error_text = body.message;
          });
    });
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

}
