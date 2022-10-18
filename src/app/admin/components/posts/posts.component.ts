import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiCallServiceService } from '../../services/api-call-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DataModalComponent } from './data-modal/data-modal.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  displayedColumns: string[] = ['id' ,'firstName', 'lastName', 'email', 'mobile', 'action'];
  dataSource !: MatTableDataSource<any>;


  constructor(private apiCallService: ApiCallServiceService,
    public dialog: MatDialog,
    private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.getPostData();
  }

/**
 *This function search the data from given input.
 * @param event event
 */

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    this.dialog.open(DataModalComponent,{
    }).afterClosed().subscribe(value=>{
      if(value==='save'){
        this.getPostData();
      }
    })
  }

  getPostData() {
    this.apiCallService.getData().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(<any>res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        this.toastr.error('Unable To Fetch Data','Error !!')
      }
    })
  }

  editPostData(row: any) {
    this.dialog.open(DataModalComponent, {
      data: row
    }).afterClosed().subscribe(value => {
      if(value==='update'){
        this.getPostData();
      }
    })
  }

  deletePostData(id:number){
    if(confirm('Are you sure you want to delete?')){
      this.apiCallService.deleteData(id).subscribe({
        next:()=>{
          this.toastr.info('Data deleted successfully!!');
          this.getPostData();
        }
      });
    }
  }

}
