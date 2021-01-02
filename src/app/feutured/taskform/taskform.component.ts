import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/shared/interfaces/task';
import { CreatetaskService } from '../task-services/createtask.service';
import { GettaskbyidService } from '../task-services/gettaskbyid.service';
import { UpdatetaskService } from '../task-services/updatetask.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent implements OnInit {

  constructor(private fb: FormBuilder, private createtasks: CreatetaskService,
    private router: Router, private aroute: ActivatedRoute, private gettask: GettaskbyidService,
    private updatetask: UpdatetaskService) { }

  // tasksForm: FormGroup;
  tasks: Task;
  submitted: boolean = false;
  editId: string = "";
  editBtn: boolean = false;

  tasksForm: FormGroup = new FormGroup({
    description: new FormControl,
    projectName: new FormControl,
    completed: new FormControl,
    colaborators: new FormControl,
    estimatedTime: new FormControl
  });

  ngOnInit(): void {

    // if (this.aroute.queryParamMap.subscribe(value => {
    //     this.editId = value.id
    // })) {
    //   this.editId = this.aroute.snapshot.queryParams.get('id');
    //   console.log(this.editId)
    // } else {

    this.aroute.queryParamMap.subscribe(value => {
      this.editId = value.get('id');
    })
    if (!(this.editId === null)) {
      this.editBtn = true;
      console.log(this.editId)
      this.gettask.taskId(this.editId).subscribe(value => {
        this.tasksForm = this.fb.group({
          description: [value.description, Validators.required],
          projectName: [value.projectName, Validators.required],
          completed: [value.completed],
          colaborators: [value.colaborators],
          estimatedTime: [value.estimatedTime]
        })
      })
    } else {
      this.tasksForm = this.fb.group({
        description: [null, Validators.required],
        projectName: [null, Validators.required],
        completed: [false],
        colaborators: [null],
        estimatedTime: [null]
      })
    }

  }

  submitTask() {
    if (!this.tasksForm.invalid) {
      this.submitted = true;
      this.tasks = this.tasksForm.value
      // console.log(this.tasks.completed, this.submitted)

      if (this.editBtn) {
        this.updatetask.updateTasks(this.editId, this.tasks).subscribe(value => {
          this.router.navigate(["home"], { queryParams: { id: value._id } })
        })
      } else {
        this.createtasks.createTask(this.tasks).subscribe(value => {
          this.router.navigate(["home"], { queryParams: { id: value._id } })
        })
      }
    }
  }

}
