import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-todo',
  templateUrl: './app-todo.component.html',
  styleUrls: ['./app-todo.component.css']
})
export class AppTodoComponent implements OnInit {

	task = {
		name: '',
		id: 0
	}
	tasks = [];

	onClick() {
		if(this.task.id == 0) {
			this.tasks.push({
				id: (new Date()).getTime(),
				name: this.task.name,
				strike: false
			});
		}
		this.task = {
			name: '',
			id: 0
		}
	};

	onEdit(item) {
		this.task = item;
	};

	onDelete(item) {
		for(var i=0; i< this.tasks.length; i++) {
			if(item.id == this.tasks[i].id) {
				this.tasks.splice(i, 1);
				break;
			}
		}
	};

	onMark(item) {
		for(var i=0; i<this.tasks.length; i++) {
			if(item.id == this.tasks[i].id) {
				if(this.tasks[i].strike) {
					this.tasks[i].strike = false;
					// console.log(this.tasks[i].name);
				} else {
					this.tasks[i].strike = true;
					// console.log(this.tasks[i].id);
				}
				break;
			}
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
