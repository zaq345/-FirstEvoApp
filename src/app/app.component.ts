import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from './interface/book';
import { MatTable } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // bookForm: FormGroup;

  // constructor() {
  //   this.bookForm = new FormGroup({
  //     title: new FormControl('', Validators.required),
  //     author: new FormControl('', Validators.required)
  //   });
  // }
  ngOnInit(): void {
    console.log(this.bookTitle.trim().length > 0 && this.bookAuthor.trim().length > 0)
  }

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
