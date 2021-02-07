import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from 'src/app/service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoServise: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id != -1){
      this.todoServise.retrieveTodo('vitalii', this.id)
        .subscribe(
          data => this.todo = data
        );
    }
  }

  saveTodo(){
    if(this.id == -1){
      this.todoServise.createTodo('vitalii', this.todo)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
    else{
      this.todoServise.updateTodo('vitalii', this.id, this.todo)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
  }

}
