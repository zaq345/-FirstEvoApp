import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodoState } from './store/todo.state';
import { TodoUpdate } from './store/model/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) { }

  inputText: string = '';
  todoArr: string[] = [];

  ngOnInit(): void {
    this.store.select(TodoState.getText).subscribe({
      next: data => {
        this.todoArr = data
      }
    })
  }
  title = 'FirstEvoApp';

  addTodo(){
    this.store.dispatch(new TodoUpdate({
      text: [this.inputText]
    }))
    this.inputText = ''
  }
}
