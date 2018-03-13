import { Component } from '@angular/core';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];
  constructor() {
    this.recipes = [
      new Recipe('Блинчики', 'Любимые блинчики на молоке и масле.', null, null, null),
      new Recipe('Шашлык', 'Из свинной шейки на углях.', null, null, null),
      new Recipe('Баранина тушенная с картошкой', 'Баранина кусками с крупными кусками картошки, лука и маркови, запеченная в духовки с бульоном из бараньей косточки со специями.', null, null, null),
    ];
  }

}
