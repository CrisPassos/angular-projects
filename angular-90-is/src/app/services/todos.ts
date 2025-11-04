import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { HttpClient } from '@angular/common/http';
//provide roots significa que minha services vai estar disponivel em toda minha app sem precisar importar ou injetar
@Injectable({
  providedIn: 'root',
})
export class TodosServices {
  http = inject(HttpClient);
  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
