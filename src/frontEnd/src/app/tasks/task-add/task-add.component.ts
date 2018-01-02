import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskListComponent} from "../task-list/task-list.component";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTask(task: Task){

  }

}
