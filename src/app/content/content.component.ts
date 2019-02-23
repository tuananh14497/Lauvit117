import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


export interface PeriodicElement {
  name: string;
  price: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Lẩu Vịt To', price: '250.000 VND'},
  {name: 'Lẩu Vịt Nhỏ', price: '190.000 VND'},
  {name: 'Vịt Chiên Mắm', price: '100.000 VND'},
  {name: 'Vịt Men 117', price: '200.000 VND'},
  {name: 'Vịt Áp Chảo', price: '100.000 VND'},
  {name: 'Vịt Rang Muối', price: '110.000 VND'},
  {name: 'Gỏi Vịt', price: '110.000 VND'},
  {name: 'Vịt Quay', price: '100.000 VND'},
  {name: 'Vịt Trộn Chua Ngọt', price: '100.000 VND'},
  {name: 'Vịt Luộc', price: '100.000 VND'},
  {name: 'Lưỡi Vịt', price: '110.000 VND'},
  {name: 'Vịt Xào Thập Cẩm', price: '100.000 VND'},
  {name: 'Lòng Vịt Xào Thập Cẩm', price: '100.000 VND'},
  {name: 'Lòng Mề Luộc', price: '100.000 VND'},
  {name: 'Mề Luộc', price: '110.000 VND'},
  {name: 'Vịt Hầm Ngải Cứu', price: '100.000 VND'},
  {name: 'Chân Vịt Hầm Ngải Cứu', price: '90.000 VND'},
  {name: 'Xáo Vịt', price: '45.000 VND'},
  {name: 'Cơm Rang Đĩa To', price: '80.000 VND'},
  {name: 'Cơm Rang Đĩa Nhỏ', price: '50.000 VND'},
  {name: 'Miến Xào Đĩa To', price: '80.000 VND'},
  {name: 'Miến Xào Đĩa Nhỏ', price: '50.000 VND'},
  {name: 'Cháo Tô To', price: '50.000 VND'},
  {name: 'Cháo Tô Nhỏ', price: '20.000 VND'},
];



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    // animation triggers go here
  ]
})


export class ContentComponent {
  displayedColumns: string[] = ['name', 'price'];
  dataSource = ELEMENT_DATA;

  
}


