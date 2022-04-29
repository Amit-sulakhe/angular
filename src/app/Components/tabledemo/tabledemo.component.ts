import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  location: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', location: 'pune'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', location: 'pune'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', location: 'pune'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', location: 'pune'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', location: 'pune'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', location: 'pune'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', location: 'pune'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', location: 'pune'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', location: 'pune'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', location: 'pune'},
];

@Component({
  selector: 'app-tabledemo',
  templateUrl: './tabledemo.component.html',
  styleUrls: ['./tabledemo.component.css']
})
export class TabledemoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'location'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
