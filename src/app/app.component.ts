import { Component, ViewChild } from '@angular/core';
import { Book } from './interface/book';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild(MatTable) table!: MatTable<any>;

  bookTitle = '';
  bookAuthor = '';

  tableData: Book[] = [
    {
      index: 1,
      title: 'Хоббит',
      author: 'Дж.Р.Р. Толкин'
    },
    {
      index: 2,
      title: 'Задача Трёх Тел',
      author: 'Лю Цысинь'
    },
    {
      index: 3,
      title: 'Кровь и Железо',
      author: 'Джо Аберкромби'
    }
  ]
  displayedColumns: string[] = ['index', 'title', 'author'];

  addBook() {
    this.tableData.push({
      index: this.tableData.length + 1,
      title: this.bookTitle,
      author: this.bookAuthor
    })
    this.bookAuthor = '';
    this.bookTitle = '';    


    this.table.renderRows();
  }
}
