import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/shared/interfaces/task';
import { DeletetaskService } from '../task-services/deletetask.service';
import { GettaskbyidService } from '../task-services/gettaskbyid.service';
import { GettasksService } from '../task-services/gettasks.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private gettasks: GettasksService, private del: DeletetaskService,
    private getId: GettaskbyidService, private router: Router) { }
  //for page 0: limit10, skip0, page1 limit10 skip10 etc

  //initialize data
  TaskData: Task[] = [];
  colaborators: string = "";
  description: string = "";
  completed: boolean;
  projectName: string = "";
  limit: number = 10;
  skip: number = 0;


  ngOnInit(): void {
    this.gettasks.getTasks(this.colaborators, this.description, this.limit,
      this.skip, this.projectName, this.completed).subscribe(value => {
        // console.log(value)
        this.TaskData.push(value)
        // console.log(this.TaskData)
      })
  }

  deleteTask(item) {
    console.log(item._id)
    let result = window.confirm("Are you sure?")
    if (result) {
      this.TaskData = [];
      this.del.delTask(item._id).subscribe();
      this.gettasks.getTasks(this.colaborators, this.description, this.limit,
        this.skip, this.projectName, this.completed).subscribe(value => {
          this.TaskData.push(value)
        })
    }
  }

  editTask(item) {
    this.getId.taskId(item._id).subscribe( () => {
      this.router.navigate(["home/taskform"], {queryParams: {id: item._id}})
    })
  }

}
