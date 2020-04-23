import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
      this.http = http;
  }

  public Login(username: string, password: string): Promise<User> {
      return this.http.get<User>(environment.apiURL + 'api/user/login/' + username + '/' + password).toPromise();
  }
  public Win(username: string, id: number) {
      if (id < 1000)
          return this.http.get<User>(environment.apiURL + 'api/user/win/' + username + '/' + id).toPromise();
      return this.http.get<User>(environment.apiURL + 'api/user/win/' + username + '/1000').toPromise();
  }
}
