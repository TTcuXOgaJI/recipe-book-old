import {Component, OnInit} from '@angular/core';
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {Ingredient} from "../recipes/shared";

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html',
  directives: [ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
