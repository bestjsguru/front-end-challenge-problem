import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrls: ['./equipment-item.component.css']
})
export class EquipmentItemComponent implements OnInit {

  @Input() equipment;
  @Input() noBorder: boolean;
  @Output() remove = new EventEmitter();

  form: FormGroup;
  opened: boolean;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      model_number: [null],
      equipment_type: [null],
      description: [null],
      location: [null],
      serial_number: [null]
    });
  }

  ngOnInit() {
    this.form.patchValue(this.equipment);
  }

  onRemove(event: Event) {
    event.stopPropagation();
    this.remove.emit();
  }

  toggleDetail() {
    this.opened = !this.opened;
  }

}
