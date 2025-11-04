import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosServices } from '../services/todos';
import { Todo } from '../model/todo';
import { catchError } from 'rxjs';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos-pipe';
@Component({
  selector: 'app-todos',
  imports: [TodoItem, FormsModule, FilterTodosPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {
  todoServices = inject(TodosServices);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    this.todoServices.getTodosFromApi()
      .pipe(
        catchError(error => {
          console.error(error);
          throw error
        })
      ).subscribe((todos) => {
        this.todoItems.set(todos);
      })
  }

  updatedTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map(todo => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }

        return todo;
      })
    })

  }


}
