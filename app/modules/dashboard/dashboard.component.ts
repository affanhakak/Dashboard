import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  Percentage: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Ram Util', Percentage: 20, symbol: 'Sys-A' },
  { position: 2, name: 'Cpu Util', Percentage: 26, symbol: 'Sys-B' },
  { position: 3, name: 'Devices', Percentage: 37, symbol: 'Sys-C' },
  { position: 4, name: 'Drives', Percentage: 48, symbol: 'Sys-D' },
  { position: 5, name: 'Memory Storage', Percentage: 51, symbol: 'Sys-E' },
  { position: 6, name: 'System A Ram Util', Percentage: 1.0079, symbol: 'Sys-A' },
  { position: 7, name: 'Cpu Util', Percentage: 4.0026, symbol: 'Sys-B' },
  { position: 8, name: 'Devices', Percentage: 6.941, symbol: 'Sys-C' },
  { position: 9, name: 'Drives', Percentage: 9.0122, symbol: 'Sys-D' },
  { position: 10, name: 'Memory Storage', Percentage: 10.811, symbol: 'Sys-E' },
  { position: 11, name: 'System A Ram Util', Percentage: 1.0079, symbol: 'Sys-A' },
  { position: 12, name: 'Cpu Util', Percentage: 4.0026, symbol: 'Sys-B' },
  { position: 13, name: 'Devices', Percentage: 6.941, symbol: 'Sys-C' },
  { position: 14, name: 'Drives', Percentage: 9.0122, symbol: 'Sys-D' },
  { position: 15, name: 'Memory Storage', Percentage: 10.811, symbol: 'Sys-E' },
  { position: 16, name: 'System A Ram Util', Percentage: 1.0079, symbol: 'Sys-A' },
  { position: 17, name: 'Cpu Util', Percentage: 4.0026, symbol: 'Sys-B' },
  { position: 18, name: 'Devices', Percentage: 6.941, symbol: 'Sys-C' },
  { position: 19, name: 'Drives', Percentage: 9.0122, symbol: 'Sys-D' },
  { position: 20, name: 'Memory Storage', Percentage: 10.811, symbol: 'Sys-E' },
];
