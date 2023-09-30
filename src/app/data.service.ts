import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient
  ) { }

  getBtn1() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getBtn2() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { params: { postId: 1 } });
  }

  postBtn3() {
    return this.http.post('https://jsonplaceholder.typicode.com/comments', {})
  }

  getBtn4() {
    return this.http.get('https://jsonplaceholder.typicode.com/post')
  }

  getBtn5() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers: { 'X-Test': '1' }, responseType: 'text' });
  }

  deleteBtn6() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }

  getResolve() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1')
  }


}
