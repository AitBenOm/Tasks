import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskListComponent} from "../task-list/task-list.component";
import {TaskService} from "../taskService";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  addTaskValue: String=null;

  ngOnInit() {
  }

  onAddTask(event){

    let task: Task = new Task(event.target.value,false,this.getToDayString());
    this.taskService.addTask(task).subscribe(
      (newTask: Task)=> {
        this.addTaskValue= ' ';
        this.taskService.onTaskAdded.emit(newTask);
      }
    );
  }

  getToDayString(){
    let toDay = new Date();
    let dd: any = toDay.getDay()
    let mm: any= toDay.getMonth()+1;
    let yyyy: any= toDay.getFullYear();

    if(dd<10){
      dd='0'+dd;
    }
    if (mm<10){
      mm='0'+mm;
    }

    return mm+'/'+dd+'/'+yyyy;
  }

}
