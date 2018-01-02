import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../taskService";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[]=[];

  constructor( private  taskService: TaskService) { }

  ngOnInit() {
 this.taskService.getTasks().subscribe(
  ( tasks: Task[]) =>{
    this.tasks=tasks
  }, (error) => console.log(error)
);
  }

  getDueDateLabel(task: Task){
    return task.compleated ? 'label-success' : 'label-primary';
  }

  onTaskChange(){

  }

}
