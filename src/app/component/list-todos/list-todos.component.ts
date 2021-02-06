import { Component, OnInit } from '@angular/core';
import { TodoDataService } from 'src/app/service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: string;

  constructor(
    private todoService: TodoDataService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('vitalii').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id){
    this.todoService.deleteTodo('vitalii', id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

}
