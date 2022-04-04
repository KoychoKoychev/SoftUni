import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserData } from './interfaces/userData';

@Injectable()
export class AuthService {

  localStorage = localStorage;


  constructor(public http: HttpClient) { }

  public hasUser(): boolean {
    if (this.localStorage.getItem('user')) {
      return true;
    } else {
      return false;
    }
  }


  register (body: IUserData): Observable<any> {
    const headers = {
      "X-Parse-Application-Id": "DrLUWya6WmD9ni2YZ2Yi1dXzGraaQiyEArZT7oop",
      "X-Parse-REST-API-Key": "Oquz726iAu0T1Gfyrjduh6d6diipGKs10g16yAvU",
      "X-Parse-Revocable-Session": "1",
      "Content-Type": "application/json"
    }
    return this.http.post(environment.apiUrl + '/users', body, { headers } );
  }
}
