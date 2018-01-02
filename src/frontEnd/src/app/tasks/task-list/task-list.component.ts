import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[]=[];

  constructor() { }

  ngOnInit() {
    this.tasks.push(new Task(1,'Task1', true, '01/01/2018'));
    this.tasks.push(new Task(4,'Task2', true, '01/01/2018'));
    this.tasks.push(new Task(3,'Task3', true, '01/01/2018'));
    this.tasks.push(new Task(2,'Task4', true, '01/01/2018'));
  }

}
