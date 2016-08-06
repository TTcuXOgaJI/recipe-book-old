import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeItemComponent} from "./recipe-item.component";

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe: Recipe = new Recipe('Dummy', 'Description', 'https://cdn.shopify.com/s/files/1/0270/1859/files/MoustacheDummy.jpg?11259378687071667422');

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
