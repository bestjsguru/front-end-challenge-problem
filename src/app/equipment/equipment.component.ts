import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments = [];
  filterForm: FormGroup;
  keyword: string;
  error = null;

  constructor(
    private es: EquipmentService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      keyword: [null]
    });
  }

  ngOnInit() {
    this.es.getList().subscribe(res => {
      this.equipments = res;
    },
    error => {
      this.error = error;
    });

    this.filterForm.valueChanges.pipe(debounceTime(200)).subscribe(value => {
      this.keyword = value.keyword && value.keyword.toLowerCase();
    });
  }

  onRemove(index: number) {
    this.equipments = this.equipments.filter(x => x !== this.activeEquipments[index]);
  }

  get activeEquipments() {
    return this.equipments.filter(e => e.active && (!this.keyword
      || (e.description && e.description.toLowerCase().includes(this.keyword))
      || (e.manufacturer && e.manufacturer.toLowerCase().includes(this.keyword))
      || (e.model_number && e.model_number.toLowerCase().includes(this.keyword))
      || (e.serial_number && e.serial_number.toLowerCase().includes(this.keyword))
      || (e.equipment_type && e.equipment_type.toLowerCase().includes(this.keyword)))
    );
  }
}
