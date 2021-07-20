import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {BudgetItem} from "../../shared/models/budget-item.model";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('');
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  isNewItem: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    if (this.item.description !== "") {
      this.isNewItem = false;
    } else {
      this.isNewItem = true
      this.item = new BudgetItem("")
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
