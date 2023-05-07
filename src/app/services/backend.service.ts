import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  subscribe(email: string) {
    console.log('You are now subscribed');
  }

  getException() {
    return this.http.get(environment.baseurl + 'ThrowException');
  }
}
