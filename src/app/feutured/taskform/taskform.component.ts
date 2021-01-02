import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/shared/interfaces/task';
import { CreatetaskService } from '../task-services/createtask.service';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.scss']
})
export class TaskformComponent implements OnInit {

  constructor(private fb: FormBuilder, private createtasks: CreatetaskService,
    private router: Router, private aroute: ActivatedRoute) { }

  tasksForm: FormGroup;
  tasks: Task;
  submitted: boolean = false;
  editId: string = "";

  ngOnInit(): void {

    // if (this.aroute.queryParamMap.subscribe(value => {
    //     this.editId = value.id
    // })) {
    //   this.editId = this.aroute.snapshot.queryParams.get('id');
    //   console.log(this.editId)
    // } else {
      this.tasksForm = this.fb.group({
        description: [null, Validators.required],
        projectName: [null, Validators.required],
        completed: [null],
        colaborators: [null],
        estimatedTime: [null]
      })
    
  }

  submitTask() {
    if (!this.tasksForm.invalid) {
      this.submitted = true;
      this.tasks = this.tasksForm.value
      console.log(this.tasks.completed, this.submitted)
      this.createtasks.createTask(this.tasks).subscribe(value => {
        this.router.navigate(["home"], { queryParams: { id: value._id } })
      })
    }
  }

}
