import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/interfaces/task';
import { DeletetaskService } from '../task-services/deletetask.service';
import { GettasksService } from '../task-services/gettasks.service';
import { DeleteuserService } from '../user-services/deleteuser.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private gettasks: GettasksService, private del: DeletetaskService) { }
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

}
