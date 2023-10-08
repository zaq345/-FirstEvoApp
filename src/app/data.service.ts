import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  role: 'user' | 'admin' = 'user';

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { params: { _limit: 3 } });
  }

  getPost(id: number | string) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
}
