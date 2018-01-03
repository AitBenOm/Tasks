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
  //checked: boolean;

  constructor( private  taskService: TaskService) { }

  ngOnInit() {
 this.taskService.getTasks().subscribe(
  ( tasks: Task[]) =>{
    this.tasks=tasks;
    // console.log("task 0 dueDate "+tasks[0].dueDate);
  }, (error) => console.log(error)
);

  this.taskService.onTaskAdded.subscribe(
    (task: Task) =>{
      this.tasks.push(task)
    }
  );
  }

  getDueDateLabel(task: Task){
    return task.completed ? 'label-success' : 'label-primary';
  }

  onTaskChange(event, task: Task){
    console.log(task);
    console.log(event);
this.taskService.saveTask(task, event.target.checked).subscribe();
  }

}
