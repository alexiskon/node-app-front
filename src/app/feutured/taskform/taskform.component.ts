import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/shared/interfaces/task';
import { CreatetaskService } from '../task-services/createtask.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent implements OnInit {

  constructor(private fb: FormBuilder, private createtasks: CreatetaskService,
    private router: Router) { }

  tasksForm: FormGroup;
  tasks: Task;
  submitted: boolean = false;

  ngOnInit(): void {
    this.tasksForm = this.fb.group({
      description: [null, Validators.required],
      projectName: [null, Validators.required],
      completed: [null, Validators.required],
      colaborators: [null, Validators.required],
      estimatedTime: [null, Validators.required]
    })
  }

  submitTask() {
    if (!this.tasksForm.invalid) {
      this.submitted = true;
      this.tasks = this.tasksForm.value
      console.log(this.tasks.completed, this.submitted)
      this.createtasks.createTask(this.tasks).subscribe( value => {
        this.router.navigate(["home"], { queryParams: {id: value.id,}})
      })
    }
  }

}
