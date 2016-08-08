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
  recipies: Recipe[] = [
    new Recipe('Hamburger', 'Juiciest Hamburgers Ever', 'http://images.media-allrecipes.com/userphotos/720x405/613791.jpg',[]),
    new Recipe('Greek Salad', 'Tasty Salad', 'http://images.media-allrecipes.com/userphotos/250x250/961959.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

}
