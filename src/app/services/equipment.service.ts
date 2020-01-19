import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  constructor(
    private bs: BackendService
  ) { }

  getList() {
    return this.bs.get(`equipment`);
  }

}
