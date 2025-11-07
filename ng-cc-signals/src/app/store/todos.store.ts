import { computed, effect } from "@angular/core";
import { TodoItem } from "./todos.model";
import { getState, patchState, signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";

const todoStoreKey = 'ng_cookbook_todos';

type TodoFilter = 'all' | 'active' | 'completed';

type TodoState = {
  todos: TodoItem[];
  filter: TodoFilter;
}

const initialState: TodoState = {
  todos: [],
  filter: 'all'
}

//WithComputed manipula os dados
//WatchState quando eu iniciou o componente eu vou ficar observando as mudanas da tela
//O effect tem o o historico final, ele espera e combina as coisas diferente do watch que fica verificando em cada mudanca
export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ todos, filter }) => ({
    completedTodosLength: computed(() => todos().filter((todoItem) => {
      return todoItem.completed;
    }).length
    ),
    filteredTodos: computed(() => {
      switch (filter()) {
        case 'completed':
          return todos().filter((todoItem) => {
            return todoItem.completed;
          })
        case 'active':
          return todos().filter((todoItem) => {
            return !todoItem.completed;
          })
        default:
          return todos()
      }
    })
  })),
  withMethods((store) => ({
    //toda vez que formos atualizar um item no store usamos o patchState
    addTodo(newTodoTitle: string) {
      patchState(store, {
        todos: [
          {
            title: newTodoTitle,
            id: Date.now().toString(),
            completed: false
          },
          ...store.todos()
        ]
      })
    },
    toggleTodo(todoId: string) {
      patchState(store, {
        todos: store.todos().map(todoItem => {
          if (todoItem.id === todoId) {
            return {
              ...todoItem,
              completed: !todoItem.completed
            }
          }

          return todoItem;
        })
      })
    },
    changeFilter(filter: TodoFilter) {
      patchState(store, {
        filter,
      });
    }
  })),
  withHooks({
    onInit(store) {
      const todosFromStorage = JSON.parse(
        localStorage.getItem(todoStoreKey) || '[]'
      )
      patchState(store, {
        todos: todosFromStorage
      }),

        effect(() => {
          const state = getState(store);
          localStorage.setItem(
            todoStoreKey,
            JSON.stringify(state.todos)
          )
        })
    }
  })
);
