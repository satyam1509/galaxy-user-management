import { Component, ViewChild } from '@angular/core';
import { postsData } from './posts';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiCallServiceService } from '../../services/api-call-service.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  apiData!: postsData[] | any;
  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name', 'avatar'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(private apiCallService: ApiCallServiceService) {
    this.fetchData();
  }

  fetchData() {
    this.apiCallService.getData().subscribe((res: any) => {
      this.apiData = res.data;
      this.dataSource = new MatTableDataSource(this.apiData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
