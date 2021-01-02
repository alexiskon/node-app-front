import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Task } from 'src/app/shared/interfaces/task';
import { DeletetaskService } from '../task-services/deletetask.service';
import { GettaskbyidService } from '../task-services/gettaskbyid.service';
import { GettasksService } from '../task-services/gettasks.service';

@Component({
  selector: 'app-mathome',
  styleUrls: ['./mathome.component.scss'],
  templateUrl: './mathome.component.html',
})
export class MathomeComponent implements OnInit {

  constructor(private gettasks: GettasksService, private del: DeletetaskService,
    private getId: GettaskbyidService, private router: Router) { }


  TaskData: Task[] = [];

  displayedColumns: string[] = ['description', 'projectName', 'completed', 'estimatedTime', 'colaborators', 'created', 'actions'];
  // dataSource = this.TaskData
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {


    this.gettasks.getTasks().subscribe(value => {
      // console.log(value)
      this.TaskData = value
      this.dataSource = new MatTableDataSource(this.TaskData)
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      // console.log(this.TaskData)
      // console.log(this.dataSource)
    })
  }

  editTask(item) {
    console.log(item)
    this.getId.taskId(item._id).subscribe(() => {
      this.router.navigate(["home/taskform"], { queryParams: { id: item._id } })
    })
  }


  deleteTask(item) {
    console.log(item)
    let result = window.confirm("Are you sure?")
    if (result) {
      this.TaskData = [];
      this.del.delTask(item._id).subscribe();
      this.gettasks.getTasks().subscribe(value => {
        this.TaskData = value
        this.dataSource = new MatTableDataSource(this.TaskData)
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.router.navigate(["/home"])
      })
    }
  }

}

// const TaskData: Task[] = [];
  // { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

