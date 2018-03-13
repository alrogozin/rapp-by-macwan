import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  recipes: Recipe[];
  constructor() {
    this.recipes = [
      new Recipe('Блинчики', 'Любимые блинчики на молоке и масле.', null, null, null),
      new Recipe('Шашлык', 'Из свинной шейки на углях.', null, null, null),
    ];
  }
}
