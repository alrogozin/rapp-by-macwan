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
  recipes: Recipe[];
  constructor(
      private route: ActivatedRoute,
      private location: Location
    ) {
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
        'keywords': ['блинчики', 'завтрак'],
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
    ),
    ];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.recipe = this.findRecipeById(parseInt(params.get('recipe_id'), 10));
    });
  }

  findRecipeById(id: number): Recipe {
      for (const recipe of this.recipes) {
        if (recipe.id === id) {
          return recipe;
        }
      }
      return null;
  }

  goBackButtonPressed(): void {
    this.location.back();
  }

}
