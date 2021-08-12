
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
    getUser() {
      return this.http.get('https://Jsonplaceholder.typicode.com/users');
    }
  }

