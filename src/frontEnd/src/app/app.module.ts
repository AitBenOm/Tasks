import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskAddComponent } from "./tasks/task-add/task-add.component";
import { TaskListComponent } from "./tasks/task-list/task-list.component";
import { TasksComponent } from './tasks/tasks.component';
import {TaskService} from "./tasks/taskService";

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    TaskListComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
