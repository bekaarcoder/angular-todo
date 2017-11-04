import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-todo',
  templateUrl: './app-todo.component.html',
  styleUrls: ['./app-todo.component.css']
})
export class AppTodoComponent implements OnInit {

	task: string;
	tasks = [];

	onClick() {
		this.tasks.push({
			name: this.task
		});
		this.task = "";
	}

  constructor() { }

  ngOnInit() {
  }

}
