import {Component, OnInit} from '@angular/core';
import {BudgetItem} from "../../shared/models/budget-item.model";
import {UpdateEvent} from "../budget-item-list/budget-item-list.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(item: BudgetItem) {
    this.budgetItems.push(item);
    this.totalBudget += item.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.totalBudget -= item.amount;
    this.budgetItems.splice(index, 1);
  }

  update(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
